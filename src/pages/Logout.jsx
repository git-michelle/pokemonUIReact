import React from "react";
import { Redirect } from "react-router-dom";
import { client } from "../App";

const Logout = () => {
  localStorage.removeItem("token");
  //clear apollo cache
  client.clearStore();

  return <Redirect to="/" />;
};

export default Logout;
