import React, { Component } from "react";
import "./App.css";
import "./Canvas.css";

import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";


import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import NewCanvas from "./pages/New";
import Canvas from "./pages/Canvas";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          {/* <Navbar /> */}

          <Switch>

            <PrivateRoute exact path="/" component={Home} />

            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />


            <PrivateRoute exact path='/new' component={NewCanvas} />
            <PrivateRoute exact path='/canvas' component={Canvas} />


          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
