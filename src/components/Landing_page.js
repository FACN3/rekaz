import React from 'react';
import ListButtons from './List_buttons';
import Navbar from './Navbar';
import Footer from './Footer';
const LandingPage = (props) => {
  return (<div className="top-level-container">
    <Navbar changeLanguage={props.changeLanguage} chosen={props.chosen} />
    <div className="header">
      <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
    </div>

    <div className="first-page-introduction-div">
      <div><h2>{props.languages.description1}</h2></div>
    </div>
    <ListButtons languages={props.languages}/>
    <div className="first-page-explain-div"><h2>{props.languages.description2}</h2></div>
    <Footer />
  </div>);
}

export default LandingPage;
