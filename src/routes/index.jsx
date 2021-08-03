import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import NavBar from "../components/NavBar";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Logout from "../pages/Logout";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={Pokemon} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/logout" component={Logout} />
    </BrowserRouter>
  );
};

export default Routes;
