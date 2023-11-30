import * as React from "react";
import { TextField, Grid, Autocomplete, Checkbox, Button } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";


const FeatureInfo = (props) => {
  const { formik } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="bio"
          label="Write a short bio about yourself"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="phoneNumber"
          label="Your Phone Number (XXX-XXX-XXXX)"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={Boolean(
            formik.errors.phoneNumber && formik.touched.phoneNumber
          )}
        />
      </Grid>
      <Grid item xs={12}></Grid>
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
