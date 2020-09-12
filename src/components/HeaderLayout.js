import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Typography from "@material-ui/core/Typography";
import Login from "./login";
import { connect } from "react-redux";

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    "&:hover": {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: "100%",
    [breakpoints.up("sm")]: {
      marginLeft: spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create("width"),
    width: "100%",
    [breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
});

const HeaderLayout = ({ classes, screen, auth }) => (
  <>
    <Typography noWrap color={"textSecondary"} className={classes.header}>
      Cars CR
    </Typography>
    <div className={classes.grow} />
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon>Search </SearchIcon>
      </div>
      <InputBase
        placeholder="Buscar…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
    {screen === "xs" && (
      <IconButton>
        <Icon>more_vert</Icon>
      </IconButton>
    )}
    {screen === "sm" && (
      <>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      </>
    )}
    <>
      <IconButton>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </IconButton>
      {auth ? 
      <div>
        {auth.authInfo.user.name ? "Welcome " + auth.authInfo.user.name : <Login />}
      </div>
      : null}
    </>
  </>
);

HeaderLayout.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};
HeaderLayout.defaultProps = {
  screen: null,
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    auth,
  };
};

const wrapper = connect(mapStateToProps, null);

const componentWrap = wrapper(HeaderLayout);

const component = withStyles(styles)(componentWrap);

export default component;
