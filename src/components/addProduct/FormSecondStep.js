import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import NumberFormat from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as yup from "yup";

const validationSchema = yup.object({
  // km: yup.string().required("Motor is required"),
  // engine: yup.string().required("Motor is required"),
  // exteriorColor: yup.string().required("Color Exterior is required"),
  // interiorColor: yup.string().required("Interior Color is required"),
  // fuel: yup.string().required("Gasolina is required"),
  // transmission: yup.string().required("Transmision is required"),
  // licensePlate: yup.string().required("Placa is required"),
  // doors : yup.number()
  // .test('len', 'numero invalido', val => val && val.toString().length === 1 ).min(2)
  // .max(5, "Numero tiene que ser menor o igual que 5"),
});

const fuels = [
  {
    value: "Gasolina",
    label: "Gasolina",
  },
  {
    value: "Diesel",
    label: "Diesel",
  },
  {
    value: "Hibrido",
    label: "Hibrido",
  },
  {
    value: "Electrico",
    label: "Electrico",
  },
];

const transmissions = [
  {
    value: "Manual",
    label: "Manual",
  },
  {
    value: "Automatico",
    label: "Automatico",
  },
];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
  },
}));

export const FormSecondStep = ({
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
                        component={TextField}
                        type="text"
                        label="Cilindrada del vehiculo"
                        name="engine"
                        variant="outlined"
                        style={{ width: "60%" }}
                        InputProps={{
                          inputComponent: NumberFormatCustom,
                          startAdornment: <InputAdornment position="start">CC.</InputAdornment>,
                        }}
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        label="Kilometraje del vehiculo"
                        name="km"
                        variant="outlined"
                        style={{ width: "60%" }}
                        InputProps={{
                          inputComponent: NumberFormatCustom,
                          startAdornment: <InputAdornment position="start">Km</InputAdornment>,
                        }}
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="number"
                        label="Numero de Puertas"
                        name="doors"
                        variant="outlined"
                        style={{ width: "60%" }}
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        label="Color Exterior"
                        name="exteriorColor"
                        variant="outlined"
                        style={{ width: "60%" }}
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        label="Color Interior"
                        name="interiorColor"
                        variant="outlined"
                        style={{ width: "60%" }}
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        name="fuel"
                        label="Tipo de Gasolina"
                        select
                        variant="outlined"
                        helperText="Elije el tipo de gasolina"
                        margin="normal"
                        style={{ width: "60%" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      >
                        {fuels.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        name="transmission"
                        label="Transmision"
                        select
                        variant="outlined"
                        helperText="Elije una transmision"
                        margin="normal"
                        style={{ width: "60%" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      >
                        {transmissions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                    </Box>
                    <Box margin={1}>
                      <Field
                        component={TextField}
                        type="text"
                        label="Placa del vehiculo"
                        name="licensePlate"
                        variant="outlined"
                        style={{ width: "60%" }}
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

FormSecondStep.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormSecondStep;

//CUSTOM COMPONENT FOR FORMAT NUMBER

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

