import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import MuiTextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fieldToTextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import getAllEquipments from "../../redux/actions/getAllEquipments"; 
import * as yup from "yup";

const validationSchema = yup.object({
  equipment: yup.string().required(),
});


const FormikAutocomplete = ({ textFieldProps, label ,  ...props }) => {
  const {
    form: { setTouched, setFieldValue, values },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  console.log(values)

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      value={values.equipment}
      getOptionLabel={option => option.name}
      getOptionSelected={(option, value) => value._id === option._id}
      renderInput={(props) => (
        <MuiTextField
          {...props}
          {...textFieldProps}
          label={label}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export const FormThirdStep = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  currentStep,
  stepsLabels,
  equipments,
  getAllEquipments,
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");

  useEffect(()=>{
    getAllEquipments();
  },[getAllEquipments])
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Stepper activeStep={currentStep} orientation="vertical">
            {stepsLabels.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Form>
                    <Box margin={1}>
                      <Field
                        name="equipment"
                        component={FormikAutocomplete}
                        options={equipments}
                        label="Equipamiento"
                        textFieldProps={{
                          fullWidth: true,
                          margin: "normal",
                          variant: "outlined",
                        }}
                        multiple
                      />
                    </Box>
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

FormThirdStep.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    equipments: state.equipments,
  };
};

const mapDispatchToProps = {
  getAllEquipments,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps);

const component = wrapper(FormThirdStep);

export default component;

