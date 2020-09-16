import React from "react";

export const Alert = ({text}) => (
  <div style={{margin: '20px'}} className="alert alert-danger" role="alert">
    {text}
  </div>
);
