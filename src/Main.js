import React, { useContext } from "react";
import classes from "./Main.module.css";
import { ContextComp } from "./context-comp";
import star from "./icon-star.svg";

const Main = () => {
  const ratectx = useContext(ContextComp);
  const rateNumber = ratectx.currentRate;
  const activeBtn1 = {
    backgroundColor: rateNumber === 1 ? "hsl(25, 97%, 53%)" : "",
  };
  const activeBtn2 = {
    backgroundColor: rateNumber === 2 ? "hsl(25, 97%, 53%)" : "",
  };
  const activeBtn3 = {
    backgroundColor: rateNumber === 3 ? "hsl(25, 97%, 53%)" : "",
  };
  const activeBtn4 = {
    backgroundColor: rateNumber === 4 ? "hsl(25, 97%, 53%)" : "",
  };
  const activeBtn5 = {
    backgroundColor: rateNumber === 5 ? "hsl(25, 97%, 53%)" : "",
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageDiv}>
        <img src={star} alt="star" />
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <div className={classes.btnDiv}>
        <button style={activeBtn1} onClick={ratectx.buttonOne}>
          1
        </button>
        <button style={activeBtn2} onClick={ratectx.buttonTwo}>
          2
        </button>
        <button style={activeBtn3} onClick={ratectx.buttonThree}>
          3
        </button>
        <button style={activeBtn4} onClick={ratectx.buttonFour}>
          4
        </button>
        <button style={activeBtn5} onClick={ratectx.buttonFive}>
          5
        </button>
      </div>

      <div className={classes.submit}>
        {" "}
        <button onClick={ratectx.submit}>submit</button>
      </div>
    </div>
  );
};

export default Main;
