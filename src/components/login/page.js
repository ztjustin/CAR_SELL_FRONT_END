import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { connect } from "react-redux";
import { clear } from "../../redux/actions/alert";
import { TextField } from "formik-material-ui";

const schema = Yup.object().shape({
  email: Yup
      .string()
      .email()
      .required("Email incorrecto"),
  password: Yup
      .string()
      .required("Contrasena Vacia"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Page = (props) => {
  const classes = useStyles();

  const { handleClickOpen, handleClose, open, authUser, alert } = props;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            authUser(values.email,values.password)
          }}
        >
          {({ isSubmitting }) => (
            <Form className={classes.root}>
              <DialogTitle>Inicia Sesion</DialogTitle>
              <DialogContent>
                <Field
                  component={TextField}
                  label="Correo Electronico"
                  name="email"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  label="Contrasena"
                  name="password"
                  variant="outlined"
                />
                <DialogActions>
                  <Button
                    type="submit"
                    variant="contained" onClick={handleClose} color="secondary"
                    // disabled={isSubmitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="contained" color="primary"
                    // disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                </DialogActions>
              </DialogContent>
            </Form>
          )}
        </Formik>
        {alert.message && (
          <h1 className={`alert ${alert.type}`}>{alert.message}</h1>
        )}
      </Dialog>
    </div>
  );
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const mapDispatchToProps = {
  clear,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps);

const component = wrapper(Page);

export default component;
