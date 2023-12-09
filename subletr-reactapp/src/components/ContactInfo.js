import * as React from "react";
import { TextField, Grid } from "@mui/material";

/**
 * FeatureInfo component.
 * @function
 * @name FeatureInfo
 * @description Component for displaying additional feature information.
 * @param {object} props - The component props.
 * @param {object} props.formik - The Formik object for form management.
 * @returns {JSX.Element} The JSX element representing the FeatureInfo component.
 */
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
