import React, { useState } from "react";

export const ContextComp = React.createContext({
  currentRate: 0,
  success: false,
  buttonOne: () => {},
  buttonTwo: () => {},
  buttonThree: () => {},
  buttonFour: () => {},
  buttonFive: () => {},
  submit: () => {},
});

const ContextCompProvider = (props) => {
  const [rate, setRate] = useState(0);
  const [success, setSuccess] = useState(false);

  const buttonOneHandler = () => {
    setRate(1);
  };
  const buttonTwoHandler = () => {
    setRate(2);
  };
  const buttonThreeHandler = () => {
    setRate(3);
  };
  const buttonFourHandler = () => {
    setRate(4);
  };
  const buttonFiveHandler = () => {
    setRate(5);
  };
  const submitHandler = () => {
    if (rate > 0) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setRate(0);
      }, 5000);
    }
  };

  const ContextCompValue = {
    currentRate: rate,
    success: success,
    buttonOne: buttonOneHandler,
    buttonTwo: buttonTwoHandler,
    buttonThree: buttonThreeHandler,
    buttonFour: buttonFourHandler,
    buttonFive: buttonFiveHandler,
    submit: submitHandler,
  };

  return (
    <ContextComp.Provider value={ContextCompValue}>
      {props.children}
    </ContextComp.Provider>
  );
};

export default ContextCompProvider;
