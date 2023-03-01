import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { BreadcrumbProvider } from "./context/BreadcrumbContext";

const BreadcrumbState = ({ children }: any) => {
  return <BreadcrumbProvider>{children}</BreadcrumbProvider>;
};

function App() {
  return (
    <BreadcrumbState>
      <RouterProvider router={router} />
    </BreadcrumbState>
  );
}

export default App;
