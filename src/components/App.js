import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./Landing_page";
import SmokingPage from "./Smoking_page";
import languages from "../languages.js";
console.log(languages);

class App extends React.Component {

   constructor(props){
     super(props);
     this.state=({language:"en"})
     this.changeLanguage=this.changeLanguage.bind(this);
   }

   changeLanguage(e){
     this.setState({language: e.target.value==="ar"?"ar":"en"})
     console.log(this.state.language);

   }



  render(){return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={()=> <LandingPage chosen={this.state.language} changeLanguage={this.changeLanguage} languages={languages[this.state.language]} />}/>
        <Route path='/smoking' render={()=> <SmokingPage  chosen={this.state.language} changeLanguage={this.changeLanguage} languages={languages[this.state.language]} />}/>
      </Switch>
    </BrowserRouter>
  );}

}
export default App;
