import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import getAllCategories from "../../redux/actions/getAllCategories";
import getAllBrands from "../../redux/actions/getAllBrands"; 
import { connect } from "react-redux";

import * as yup from "yup";

const validationSchema = yup.object({
  // brand: yup.string().required("Marca del vehiculo es obligatorio"),
  // model: yup.string().required("Modelo del vehiculo es obligatorio"),
  // category: yup.string().required("Categoria del vehiculo es obligatorio"),
  // year: yup
  //   .number()
  //   .typeError("year must be a number")
  //   .positive("year must be greater than zero")
  //   .required("year is required"),
  // state: yup.string().required("Estado del vehiculo es obligatorio"),
  // price: yup
  //   .number()
  //   .typeError("price must be a number")
  //   .positive("price must be greater than zero")
  //   .required("price is required"),
  // province: yup.string().required("Provincia del vehiculo es obligatorio"),
  // // tradable: false,
  // // taxes: false,
  // // receivedCar: false,
  // comment: yup.string().required("Comentario del vehiculo es obligatorio"),
});

const state = [
  {
    value: "Excelente",
    label: "Excelente",
  },
  {
    value: "Muy Bueno",
    label: "Muy Bueno",
  },
  {
    value: "Bueno",
    label: "Bueno",
  },
];

const province = [
  {
    value: "Cartago",
    label: "Cartago",
  },
  {
    value: "San Jose",
    label: "San Jose",
  },
  {
    value: "Limon",
    label: "Limon",
  },
  {
    value: "Alajuela",
    label: "Alajuela",
  },
  {
    value: "Heredia",
    label: "Heredia",
  },
]

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const FormFirstStep = ({
  formData,
  setFormData,
  nextStep,
  currentStep,
  stepsLabels,
  getAllCategories,
  getAllBrands,
  categories,
  brands,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, [getAllCategories,getAllBrands]);

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Stepper activeStep={currentStep} orientation="vertical">
            {stepsLabels.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Form>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          name="brand"
                          label="Marca"
                          select
                          variant="outlined"
                          helperText="Elije una Marca del Vehiculo"
                          margin="normal"
                          style={{ width: "60%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          {brands.map((option) => (
                            <MenuItem key={option._id} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          label="Modelo"
                          helperText="Ejemplo: Elantra Sport Turbo"
                          name="model"
                          variant="outlined"
                          style={{ width: "60%" }}
                        />
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          name="category"
                          label="Categoria"
                          select
                          variant="outlined"
                          helperText="Elije la Categoria del Vehiculo"
                          margin="normal"
                          style={{ width: "60%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          {categories.map((option) => (
                            <MenuItem key={option._id} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          label="Año del vehiculo"
                          name="year"
                          variant="outlined"
                          style={{ width: "60%" }}
                        />
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          name="province"
                          label="Provincia"
                          select
                          variant="outlined"
                          helperText="Elije la provincia"
                          margin="normal"
                          style={{ width: "60%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          {province.map((option) => (
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
                          name="state"
                          label="Estado del vehiculo"
                          select
                          variant="outlined"
                          helperText="Estado del vehiculo"
                          margin="normal"
                          style={{ width: "60%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          {state.map((option) => (
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
                          label="Precio del vehiculo"
                          name="price"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                ₡
                              </InputAdornment>
                            ),
                          }}
                          style={{ width: "60%" }}
                        />
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          type="text"
                          label="Comentario"
                          name="comment"
                          variant="outlined"
                          style={{ width: "100%" }}
                        />
                      </Box>

                      <div>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          Continue
                        </Button>
                      </div>
                    </Form>
                  </MuiPickersUtilsProvider>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        )}
      </Formik>
    </>
  );
};

FormFirstStep.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getAllBrands: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    brands: state.brands,
  };
};

const mapDispatchToProps = {
  getAllCategories,
  getAllBrands,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps);

const component = wrapper(FormFirstStep);

export default component;
