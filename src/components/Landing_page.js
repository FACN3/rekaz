import React from 'react';
import ListButtons from './List_buttons';
const LandingPage = () => {
  return (<div className="top-level-container">
    <div className="header">
      <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
    </div>
    <div className="first-page-introduction-div">
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</h2>
    </div>
    <ListButtons />
  </div>);
}

export default LandingPage;
