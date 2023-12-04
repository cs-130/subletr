import React, { useContext } from "react";
import { TextField, Grid, Autocomplete, Checkbox, Button } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import BlankBox from "../pages/CreateListing/blankBox.js";
import './styles.css'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  position: 'relative',
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 250,
  height: 250,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};



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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
    


  const handleFileUpload = async (e) => {
    if (e.target.files.length) {
      const imgData = []
      for (let img of e.target.files) {
        const base64 = await convertToBase64(img);
        imgData.push(base64)
      }
      formik.setFieldValue("images", [...formik.values.images, ...imgData])
    }
  }


  const handleImageDelete = (i) => {
    formik.setFieldValue("images", Array.from(formik.values.images).filter((item, index) => index != i))
  }

  const thumbs = Array.from(formik.values.images).map((file, i) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file}
          style={img}
        />
        <div className="image-close" onClick={() => handleImageDelete(i)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

      </div>
    </div>
  ));

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
          value={formik.values.amenities}
          style={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Checkboxes" />}
          error={formik.errors.amenities}
          onChange={(e, value) => {
            formik.setFieldValue("amenities", value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <BlankBox
          className=""
          label="Upload four images of your place, please!"
          labelStyle={{ fontFamily: "Roboto, sans-serif", fontSize: "24px" }}
          contents={
            <div className="dropzone-parent">
              <label for="dropzone-file" className="dropzone-label">
                <div className="dropzone-div ">
                  <svg
                    className="dropzone-svg"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  style={{ display: "none" }}
                  multiple={true}
                  accept="image/*"
                  onChange={(file) => handleFileUpload(file)}
                />
              </label>
            </div>
          }
        />
        <aside style={thumbsContainer}>{thumbs}</aside>
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
        <Button variant="contained" onClick={generateFlashyDescription}>
          Generate Better Description
        </Button>
      </Grid>
      <Grid item xs={12}>
        {showDescription && (
          <TextField
            label="Generated Description"
            value={formik.values.generatedDescription}
            // onChange={(event) => setGeneratedDescription(event.target.value)}
            multiline
            fullWidth
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

export const listingFeatures = [
  "Air Conditioning",
  "Balcony",
  "In Unit Laundry",
  "Parking",
  "Furnished",
  "Pet Friendly",
  "Dishwasher",
];
