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
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ProductAdd from "../../redux/actions/productAdd";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  button: {
    margin: theme.spacing(0.5),
  },
}));

export const FormFifthStep = ({
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
  const [selected, setSelected] = React.useState(false);

  const tiers = [
    {
      title: "Gratis",
      price: "0",
      description: ["Gratis", "No aparecera como destacado"],
      buttonText: "Gratis",
      buttonVariant: "contained",
      color: "primary",
      value: "free",
    },
    {
      title: "Destacado + Etiqueta",
      subheader: "Mas Popular",
      price: "5",
      description: ["1 Mes en destacado", "1 Etiqueta libre para su vehiculo"],
      buttonText: "Agregar",
      buttonVariant: "contained",
      color: "secondary",
      value: "featuredpluslabel",
    },
    {
      title: "Destacado",
      price: "1",
      description: ["1 Mes aparecera en zona destacada"],
      buttonText: "Agregar",
      buttonVariant: "contained",
      color: "primary",
      value: "featured",
    },
  ];

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Stepper activeStep={currentStep} orientation="vertical">
            {stepsLabels.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Form>
                    <div>
                      {/* <Container
                        maxWidth="sm"
                        component="main"
                        className={classes.heroContent}
                      >
                        {/* <Typography
                          component="h1"
                          variant="h2"
                          align="center"
                          color="textPrimary"
                          gutterBottom
                        >
                          Precio
                        </Typography>
                        <Typography
                          variant="h6"
                          align="center"
                          color="textSecondary"
                          component="p"
                        >
                          Nosotros somos una empresa que nos interesa ayudar
                          de manera <Link underline={"none"}>Gratuita</Link> aquellas personas que necesiten comprar o vender un
                          auto, sin embargo tenemos estos paquetes para quienes necesiten resaltar
                          su vehiculo y tener mas visitas
                        </Typography>
                      </Container> */}
                      {/* End hero unit */}
                      <Container maxWidth="md" component="main">
                        <Grid container spacing={5} alignItems="flex-end">
                          {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                              item
                              key={tier.title}
                              xs={12}
                              sm={tier.title === "Enterprise" ? 12 : 6}
                              md={4}
                            >
                              <Card>
                                <CardHeader
                                  title={tier.title}
                                  subheader={tier.subheader}
                                  titleTypographyProps={{ align: "center" }}
                                  subheaderTypographyProps={{
                                    align: "center",
                                  }}
                                  action={
                                    tier.title === "Destacado + Etiqueta" ? <StarIcon /> : null
                                  }
                                  className={classes.cardHeader}
                                />
                                <CardContent>
                                  <div className={classes.cardPricing}>
                                    <Typography
                                      component="h2"
                                      variant="h3"
                                      color="textPrimary"
                                    >
                                      ${tier.price}
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      color="textSecondary"
                                    ></Typography>
                                  </div>
                                  <ul>
                                    {tier.description.map((line) => (
                                      <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                        key={line}
                                      >
                                        {line}
                                      </Typography>
                                    ))}
                                  </ul>
                                </CardContent>
                                <CardActions>
                                  <ToggleButtonGroup
                                    value={tier.value}
                                    exclusive
                                    onChange={() => {
                                      setFieldValue("packageValue", tier.value)
                                    }}
                                    aria-label="payment"
                                  >
                                  <ToggleButton
                                    value={tier.value}
                                    selected={false}
                                    onClick={() => {
                                      setSelected(selected);
                                    }}
                                  >
                                    <CheckIcon />
                                  </ToggleButton>
                                  </ToggleButtonGroup>
                                </CardActions>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Container>
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

FormFifthStep.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  ProductAdd,
};

const wrapper = connect(null, mapDispatchToProps);

const component = wrapper(FormFifthStep);

export default component;
