import React from "react";
import ManuBar from "../ManuBar/ManuBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ManuBar></ManuBar>

      <main>{children}</main>

      <h1>Footer</h1>
    </React.Fragment>
  );
};

export default Layout;
