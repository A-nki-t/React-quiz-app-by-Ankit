import { createContext, useState, useEffect } from "react";


export const DataContext = createContext([]);

export default function DataContextProvider({ children }) {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [LastState, setLastState] = useState(false);
  const [ResetState, setResetState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  useEffect(() => {
    let index = 1
    fetch("https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => {
        setQuestionsArray(() => {
            return data.results.map( (res) => {
                let newObj = {
                    id: index++,
                    question : res.question,
                    correct_answer: res.correct_answer,
                    options: [...res.incorrect_answers],
                    selectedOption: "",
                    result: false
                }
                newObj.options = [...newObj.options, newObj.correct_answer]
                // console.log(newObj);
                newObj.options = shuffleArray(newObj.options)
                return newObj
            })
        })
        setIsLoading(false)
    })
    // setIsLoading(false)
},[ResetState])


  function reset() {
    setResetState(pre => !pre)
    setIsLoading(true)
  }


  function reStartGame() {
    setLastState(false);
  }

  function selectOption(selected, index) {
    console.log(selected);
    setQuestionsArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index - 1] = {
        ...newArray[index - 1],
        selectedOption: selected,
      };

      return newArray;
    });
  }

  function checkAnswers() {
    setLastState(true);
    return setQuestionsArray((prevArray) => {
      return prevArray.map((ele) => {
        // console.log(ele.correct_answer, ele.selectedOption);
        if (ele.correct_answer === ele.selectedOption) {
          console.log("correct");
          return {
            ...ele,
            result: true,
          };
        } else {
          console.log("not correct");
          return {
            ...ele,
            result: false,
          };
        }
      });
    });
  }

  let val = {
    questionsArray,
    selectOption,
    checkAnswers,
    LastState,
    reStartGame,
    reset,
    isLoading,
    setIsLoading
  };

  return <DataContext.Provider value={val}>{children}</DataContext.Provider>;
}
