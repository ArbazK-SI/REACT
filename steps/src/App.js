import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen,setIsOpen]=useState(true);         //we are seeting it as true 

  function handlePrevious() {
    if (steps > 1) {
      setSteps(steps - 1);
      // setSteps(steps - 1);           // here it will not call it second times  therefore below we are using the arrow funstion to call the sett
    }
  }

  // here we will update the set by calling a funcion instead of passing a variable to called that we have done above 

  function handleNext() {
    if (steps < 3) {
      setSteps((s)=>s+1);
      // setSteps((s)=>s+1);  // it will again call and the state can be jump second time for eg from 1 to 3
    }
  }
  function handleClose(){
    setIsOpen((is)=>!is)                //true rahega to false  false rahega to true
  }

  return (
    <>
    <button className="close" onClick={handleClose}>&times;</button>


      {isOpen  && ( <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active" : ""}>2</div>
        <div className={steps >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {steps} : {messages[steps - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>)}

    </>
   
  );
}

export default App;
