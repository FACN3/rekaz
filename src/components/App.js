import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Landing_page";
import SmokingPage from "./Smoking_page";
const App = () => (

  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/smoking' component={SmokingPage} />
    </Switch>
  </BrowserRouter>

);
 export default App;
