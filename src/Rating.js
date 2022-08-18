import React, { Fragment, useContext } from "react";
import { ContextComp } from "./context-comp";
import Main from "./Main";
import Thank from "./Thank";

const Rating = () => {
  const ratectx = useContext(ContextComp);
  const success = ratectx.success;

  return <Fragment>{!success ? <Main /> : <Thank />}</Fragment>;
};

export default Rating;
