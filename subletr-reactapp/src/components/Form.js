import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Grid,
    FormHelperText,
    Button,
} from "@mui/material";
import MoreInfo from "./MoreInfo";
import BasicInfo from "./BasicInfo";
import FeatureInfo from "./FeatureInfo";
import ReviewInfo from "./ReviewInfo";

const steps = ["Basic Info", "Dates & Rent", "Amenities & Photos", "Review and Submit"];

const Form = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleSubmitFinal = () => {
        console.log("submit");

        alert(JSON.stringify(formik.values, null, 2));
    };

    const formik = useFormik({
      initialValues: {
        availSpots: "",
        accomodationType: "",
        rent: 0,
        currentOccupancy: "",
        startDate: Date.now(),
        endDate: Date.now() + 1,
        userDescription: "",
        address: "",
        bio: "",
        phoneNumbers: [],
        amenities: [],
      },
      validationSchema: Yup.object().shape({
        availSpots: Yup.number()
          .min(1)
          .integer()
          .required("Bed count is required"),
        currentOccupancy: Yup.number()
          .min(0)
          .integer()
          .required("Current Occupancy is required"),
        accomodationType: Yup.string().required(
          "Accomodation Type is required"
        ),
        rent: Yup.number().integer().min(1),
        address: Yup.string().min(1).required("Address is required"),
        startDate: Yup.date().max(
          Yup.ref("endDate"),
          "Start Date must be before End Date"
        ),
        // endDate: Yup.date().min(
        //   Yup.ref("startDate"),
        //   "End Date must be after Start Date"
        // ),
        userDescription: Yup.string().max(300),
      }),
      onSubmit: () => {
        if (activeStep === steps.length - 1) {
          console.log("last step");
        } else {
          setActiveStep((prevStep) => prevStep + 1);
          //   console.log(activeStep);
        }
      },
    });

    const formContent = (step) => {
        switch (step) {
          case 0:
            return <BasicInfo formik={formik} />;
          case 1:
            return <MoreInfo formik={formik} />;
          case 2:
            return <FeatureInfo formik={formik} />;
          case 3:
            return <ReviewInfo formik={formik} />;
          default:
            return <div>404: Not Found</div>;
        }
    };

    return (
      <Box
        sx={{
          maxWidth: "600px",
          padding: 2,
        }}
      >
        <Stepper activeStep={activeStep} orientation="horizontal">
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container>
          <Grid item xs={12} sx={{ padding: "20px" }}>
            {formContent(activeStep)}
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmitFinal}>Submit</Button>
            ) : (
              <Button onClick={formik.handleSubmit}>Next</Button>
            )}
          </Grid>
        </Grid>
      </Box>
    );
};

export default Form;
