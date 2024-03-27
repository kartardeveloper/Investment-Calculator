import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const userInputChangeHandler = (userInputLabel, userInputValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [userInputLabel]: +userInputValue,
      };
    });
  };

  let inputIsValid = true;

  if (userInput.duration < 1) {
    inputIsValid = false;
  }

  return (
    <>
      <Header />
      <UserInput
        inputChangeHandler={userInputChangeHandler}
        userInput={userInput}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
