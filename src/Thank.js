import React, { useContext } from "react";
import { ContextComp } from "./context-comp";
import classes from "./Thank.module.css";
import thanks from "./illustration-thank-you.svg";

const Thank = () => {
  const ratectx = useContext(ContextComp);
  const rate = ratectx.currentRate;
  return (
    <div className={classes.container}>
      <img src={thanks} alt="thanks" />
      <div className={classes.rate}>
        <p>You selected {rate} out of 5</p>
      </div>
      <h1>Thank You</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
};

export default Thank;
