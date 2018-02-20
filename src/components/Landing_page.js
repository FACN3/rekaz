import React from 'react';
import ListButtons from './List_buttons';
import Navbar from './Navbar';
import Footer from './Footer';
const LandingPage = (props) => {
  return (<div className="top-level-container">
    <Navbar changeLanguage={props.changeLanguage} />
    <div className="header">
      <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
    </div>

    <div className="first-page-introduction-div">
      <h2>{props.languages.description}</h2>
    </div>
    <ListButtons languages={props.languages}/>
    <Footer />
  </div>);
}

export default LandingPage;
