import React from "react";
import ManuBar from "../ManuBar/ManuBar";

const Layout = ({ children }) => {
  return (
    <>
      <ManuBar></ManuBar>

      <main>{children}</main>

      <h1>Footer</h1>
    </>
  );
};

export default Layout;
