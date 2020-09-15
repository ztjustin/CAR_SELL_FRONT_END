/* eslint-disable */
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Pagination from "@material-ui/lab/Pagination";
import Cardproduct from "../cardProduct";
import Login from "../login";
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import { withStyles } from "@material-ui/core";

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
  pagination: {
    "& > *": {
      marginBottom: 15,
    },
  },
  cardProduct: {
    Height: 140,
  },
});



const Page = (props) => {
  
  const { featureds, totalPages, onChange, classes, auth } = props;
  

  return (
    <div className={classes.root}>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        <Link underline={"none"}>Autos Descados</Link>
      </Typography>

      <Grid container spacing={2} justify="center">
        <Grid item>
          {auth.loggingIn == false ? (
            <Button variant="outlined" color="primary">
              Sign Up
            </Button>
          ) : null}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={classes.pagination}>
        {/* There is already an h1 in the page, let's not duplicate it. */}
        {/* <Typography variant="h2" component="h2">
          New Products
        </Typography> */}
        <Pagination count={totalPages} onChange={onChange} color="secondary" />
      </Grid>

      <Grid container spacing={4}>
        {featureds === undefined
          ? null
          : featureds.map((card, index) => (
              <Cardproduct card={card} key={index} />
            ))}
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
