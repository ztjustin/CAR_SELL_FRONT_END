import axios from "axios";
import { history } from "../../helpers";
import { error } from "../actions/alert";

const userConstants = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGOUT: "USERS_LOGOUT",
};

const login = (email, pasword) => {
  return (dispatch, getState) => {
    // const { products } = getState();

    dispatch(request({ email }));

    axios({
      method: "post",
      url: "http://localhost:3000/login",
      withCredentials: true,
      data: {
        email: email,
        password: pasword,
      },
    })
      .then(function (response) {
        dispatch(success(response.data));
        history.push("/home");
      })
      .catch(function (error) {
        // Error
        dispatch(failure(error));
        dispatch(setError(error.response.data.errors.msg));
      });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  function setError(message) {
    return error(message);
  }
};

// function logout() {
//   localStorage.removeItem('auth');
//   return { type: userConstants.LOGOUT };
// }

export default login;
