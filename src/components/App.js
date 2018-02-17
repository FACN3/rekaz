import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./Landing_page";
const App = () => (

  <BrowserRouter>
    <Route path='/' component={LandingPage} />
  </BrowserRouter>

);
 export default App;
