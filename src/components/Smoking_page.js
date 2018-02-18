import React from 'react';
import FirstChart from "./First_chart";

const SmokingPage = () => {
  return (
    <div>
      <div className="header">
        <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
      </div>
      <h1>Welcome to the smoking page</h1>
      <FirstChart />

    </div>
  );
}

export default SmokingPage;
