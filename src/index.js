import React from "react";
import { render } from "react-dom";

const app = () => {
  return <h1>Hello World!</h1>;
};

render(app(), document.getElementById("root"));
