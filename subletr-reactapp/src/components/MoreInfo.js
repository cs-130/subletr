import { Grid, TextField, InputAdornment, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/**
 * The MoreInfo component.
 * @param {object} props - The component props.
 * @param {object} props.formik - The Formik object for form management.
 * @returns {JSX.Element} The JSX element representing the MoreInfo component.
 */
const MoreInfo = (props) => {
  const { formik } = props;

  return (
    <Grid container spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={12}>
          <FormHelperText
            error={formik.errors.startDate && formik.touched.startDate}
          >
            Start Date
          </FormHelperText>
          <DatePicker
            id="startDate"
            name="startDate"
            disablePast
            value={formik.startDate}
            error={formik.errors.startDate && formik.touched.startDate}
            onChange={(value) => {
              formik.setFieldValue("startDate", new Date(value));
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormHelperText
            error={formik.errors.endDate && formik.touched.endDate}
          >
            End Date
          </FormHelperText>
          <DatePicker
            id="endDate"
            name="endDate"
            disablePast
            minDate={formik.startDate || null}
            value={formik.endDate}
            error={formik.errors.endDate && formik.touched.endDate}
            onChange={(value) => {
              formik.setFieldValue("endDate", new Date(value));
            }}
          />
        </Grid>
      </LocalizationProvider>
      <Grid item xs={12}>
        <TextField
          name="rent"
          label="Rent"
          variant="outlined"
          type="number"
          // fullWidth
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            step: "0.1",
            lang: "en-US",
          }}
          error={Boolean(formik.touched.rent && formik.errors.rent)}
          onChange={formik.handleChange}
          value={formik.values.rent}
        />
      </Grid>
    </Grid>
  );
};

export default MoreInfo;