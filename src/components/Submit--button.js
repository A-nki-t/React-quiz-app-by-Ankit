import {React, useContext} from "react"
import {DataContext} from '../context/dataContext'

export default function Submit__button() {
    
    const {questionsArray,checkAnswers, LastState, reStartGame, reset, setIsLoading} = useContext(DataContext)

    function handleClick() {
        checkAnswers()
    }

    function Restart() {
        reset()
        reStartGame()
            
    }

    return (
        !LastState?
        (
            <div className="submit--container">
                <button className="submit--button" onClick={handleClick}>
                    Check Answers
                </button>
            </div>
        ):
        (
            <div className="submit--container">
                <button className="submit--button" onClick={Restart}>
                    Restart Game
                </button>
            </div>
        )

    );
}


