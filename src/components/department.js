import React, { useState } from "react";
import Home from "../pages/Home";

const department = () => {
  const values = [{}];

  return (
    <div>
      {values.map((m) => {
        <Home values={m} />;
      })}
    </div>
  );
};

export default department;
