import React from "react";
import { Router, Route } from "react-router-dom";
import Login from "./components/login";

import Products from "./components/products";
import AddProduct from "./components/addProduct";
import { history, PrivateRoute } from "./helpers";
import { CookiesProvider } from 'react-cookie';
import DropZone from "./components/addProduct/DropZone";


class App extends React.Component {

  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        console.log(location)

    });
}

  render() {
    return (
      <CookiesProvider>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/dashboard" component={AddProduct} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Products} />
            <Route path="/testing" component={DropZone} />
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}

// function mapStateToProps(state) {
//   const { alert } = state;
//   return {
//     alert,
//   };
// }

// const wrapper = connect(mapStateToProps);

// const component = wrapper(App);

export default App;
