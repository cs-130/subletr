import * as React from "react";
import { TextField, Grid, Autocomplete, Checkbox, Button } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FeatureInfo = (props) => {
  const { formik } = props;
  const [showDescription, setShowDescription] = useState(false);

  const generateFlashyDescription = async () => {
    // call openai backend route
    try {
      console.log(JSON.stringify({ prompt: formik.values.userDescription }));

      const response = await fetch("http://localhost:5000/openai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: formik.values.userDescription }),
      });

      const data = await response.json();
      console.log(data);
      setShowDescription(true);
      formik.setFieldValue("generatedDescription", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          id="features"
          options={listingFeatures}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          // isOptionEqualToValue={(option, value) => option.name === value.name}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Checkboxes" />}
          error={formik.errors.amenities}
          onChange={(e, value) => {
            formik.setFieldValue("amenities", value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file(s)
          <VisuallyHiddenInput type="file" />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="userDescription"
          label="Basic description of your place"
          multiline
          fullWidth
          rows={4}
          inputProps={{ maxLength: 200 }}
          helperText={`${formik.values.userDescription.length}/${300}`}
          onChange={formik.handleChange}
          value={formik.values.userDescription}
          // defaultValue="Default Value"
        />
        <Button
          variant="contained"
          onClick={async () => {
            const response = await generateFlashyDescription();
            formik.setFieldValue("userDescription", response);
          }}
        >
          Generate Better Description
        </Button>
        {showDescription && (
          <TextField
            label="Generated Description"
            value={formik.values.generatedDescription}
            // onChange={(event) => setGeneratedDescription(event.target.value)}
            multiline
            rows={4}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FeatureInfo;

const listingFeatures = [
  "Air Conditioning",
  "Balcony",
  "In Unit Laundry",
  "Parking",
  "Furnished",
  "Pet Friendly",
  "Dishwasher",
];
