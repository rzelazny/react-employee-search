import React from "react";
import background from "./jumbo_background.png";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;
