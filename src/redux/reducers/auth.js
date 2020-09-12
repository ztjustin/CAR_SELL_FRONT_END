var cookie = require("cookie");

const cookies = cookie.parse(document.cookie);
let authInfo;
if (cookies.userInfo) {
  authInfo = JSON.parse(cookies.userInfo);
}

const stateBase = {
  loggingIn: false,
  authInfo: {
    token: "",
    user: {
      _id: "",
      name: "",
      email: "",
      role: "",
      verified: false,
      verification: "",
    },
  },
};

const initialState = authInfo
  ? { loggingIn: true, authInfo }
  : stateBase
  
function auth(state = initialState, action) {
      switch (action.type) {
        case "USERS_LOGIN_REQUEST":
          return {
            loggingIn: true,
            authInfo: {
              token: "",
              user: { email: action.user.email },
            },
          };
        case "USERS_LOGIN_SUCCESS":
          return {
            loggedIn: true,
            authInfo: action.user,
          };
        case "USERS_LOGIN_FAILURE":
          return {
              loggingIn: true,
              authInfo: {
                token: "",
                user: {},
              },
  
          };
        case "USERS_LOGOUT":
          return {};
        default:
          return state;
      }
    };


export default auth;
