import React from 'react';
import ListButtons from './List_buttons';
const LandingPage = (props) => {
  return (<div className="top-level-container">
    <div className="header">
      <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
    </div>
    <select
      id="age"
      className="First-chart-filter"
      onChange={ props.changeLanguage }
      value={props.chosen}
    >
      <option value="en"> English</option>
      <option value="ar">العربية </option>
    </select>

    <div className="first-page-introduction-div">
      <h2>{props.languages.description}</h2>
    </div>
    <ListButtons languages={props.languages}/>
  </div>);
}

export default LandingPage;
