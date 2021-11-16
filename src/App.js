import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Services from "./Components/Services";

const App = () => {
  return (
  <>
  <Main />
  <Services/>
  </>
  );
};

export default App;
