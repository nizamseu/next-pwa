import React from "react";
import ManuBar from "../ManuBar/ManuBar";
import Navbar from "../ManuBar/Navbar";
import TestManu from "../ManuBar/TestManu";

const Layout = ({ children }) => {
  return (
    <>
      {/* <ManuBar></ManuBar> */}
      <TestManu></TestManu>
      {/* <Navbar></Navbar> */}
      <main>{children}</main>

      {/* <h1>Footer</h1> */}
    </>
  );
};

export default Layout;
