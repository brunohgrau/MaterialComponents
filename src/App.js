import React from "react";
import Header1 from "./components/Header/Header1";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header1 />
      <Outlet />
    </>
  );
}

export default App;
