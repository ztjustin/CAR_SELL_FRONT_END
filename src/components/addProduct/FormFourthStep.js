import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DropZone from "./DropZone";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export const FormFourthStep = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  currentStep,
  stepsLabels,
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
      >
        {({ errors, touched, setFieldValue , values }) => (
          <Stepper activeStep={currentStep} orientation="vertical">
            {stepsLabels.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Form>
                    <div>
                      <DropZone setFieldValue={setFieldValue} values={values} />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => setDirection("back")}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => setDirection("forward")}
                        className={classes.button}
                      >
                        Continue
                      </Button>
                    </div>
                  </Form>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        )}
      </Formik>
    </>
  );
};

FormFourthStep.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormFourthStep;
