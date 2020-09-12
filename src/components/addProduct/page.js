import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import ContentForm from "./ContentForm";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = ({ breakpoints }) => ({
  root: {
    [breakpoints.up("sm")]: {
      padding: 30,
      maxWidth: 500,
    },
    [breakpoints.up("md")]: {
      maxWidth: 1500,
    },
    [breakpoints.up("xs")]: {
      maxWidth: 1500,
      padding: 30,
    },
  },
});

const Page = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        Tienda Online
      </Typography>
      <Grid container spacing={1} >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ContentForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Page.propTypes = {};
Page.defaultProps = {};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    auth,
  };
};

const wrapper = connect(mapStateToProps, null);

const componentWrap = wrapper(Page);

const component = withStyles(styles)(componentWrap);

export default component;
