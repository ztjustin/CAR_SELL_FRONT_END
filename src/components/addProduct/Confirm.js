import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import ProductAdd from "../../redux/actions/productAdd";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export const Confirm = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  currentStep,
  stepsLabels,
  ProductAdd,
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          if(direction === "back"){
            prevStep()
          }else{
            ProductAdd(values);
          }
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
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
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

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  ProductAdd
};

const wrapper = connect(null, mapDispatchToProps);

const component = wrapper(Confirm);

export default component;
