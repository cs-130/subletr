import { Grid, TextField, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const today = dayjs();
const tomorrow = dayjs().add(1, "day");

const MoreInfo = (props) => {
  const { formik } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="startDate"
            name="startDate"
            disablePast
            value={formik.startDate}
            error={formik.errors.startDate && formik.touched.startDate}
            onChange={(value) => {
              formik.setFieldValue("startDate", new Date(value));
            }}
            // slotProps={{
            //   textField: {
            //     size: "small",
            //     margin: "dense",
            //   },
            // }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            // slotProps={{
            //   textField: {
            //     size: "small",
            //     margin: "dense",
            //   },
            // }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            name="dateRange"
            disablePast
            defaultValue={[today, tomorrow]}
            minDate={tomorrow}
            onChange={(value) => {
              // formik.setFieldValue("endDate", new Date(value));
              console.log(value);
              console.log(value[0]);
            }}
          />
        </LocalizationProvider> */}
      </Grid>
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

const listingFeatures = [
  {name: "Air Conditioning", type: "amenity"},
  {name: "Balcony", type: "amenity"},
  {name: "In Unit Laundry", type: "amenity"},
  {name: "Parking", type: "amenity"},
  {name: "Furnished", type: "amenity"},
  {name: "Pet Friendly", type: "amenity"},
  {name: "Dishwasher", type: "amenity"}
];