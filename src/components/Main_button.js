import React, { Component } from 'react';

const MainButton = (props) => {
    return (
      <div className="main-buttons" onClick={() => props.onButtonClick()}>
        <img className="iconImg" src={props.img} alt={props.title + "icons"}/>
        <span>{props.title}</span>
        <img className="arrow" src="./public/assets/more-blue.png" alt=""/>
      </div>
    );
  }

export default MainButton;
