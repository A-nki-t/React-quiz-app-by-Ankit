import { React, useContext } from "react";
import Option from "./Option.js";
import { DataContext } from "../context/dataContext";

export default function Question(props) {
  const { questionsArray, selectOption } = useContext(DataContext);

  const currentQuestion = questionsArray[props.id];

  const Options = currentQuestion.options;

  const option_comp = (
    <>
      <Option
        id={currentQuestion.id}
        option={Options[0]}
        SelectOption={selectOption}
        selectedOption={currentQuestion.selectedOption}
      />
      <Option
        id={currentQuestion.id}
        option={Options[1]}
        SelectOption={selectOption}
        selectedOption={currentQuestion.selectedOption}
      />
      <Option
        id={currentQuestion.id}
        option={Options[2]}
        SelectOption={selectOption}
        selectedOption={currentQuestion.selectedOption}
      />
      <Option
        id={currentQuestion.id}
        option={Options[3]}
        SelectOption={selectOption}
        selectedOption={currentQuestion.selectedOption}
      />
    </>
  );

  return (
    <>
      <div className="question--component">
        <h3 className="question">{currentQuestion.question}</h3>
      </div>
      <div className="question--options">{option_comp}</div>
    </>
  );
}
