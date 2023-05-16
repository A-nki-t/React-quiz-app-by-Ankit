import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
export default function Option(props) {
    const {questionsArray,selectOption, LastState} = useContext(DataContext)

    function handleClick() {
        selectOption(props.option, props.id);
    }

    
    return !LastState ? (
        <h4 className={`option ${props.selectedOption === props.option? 'selected--option': ""}`}  onClick={handleClick}>
            {props.option}
        </h4>
    ): 
    (
        questionsArray[props.id -1].result ? 

            <h4 className={`option ${props.selectedOption === props.option? 'correct--option' : ''}`}>
                {props.option}
            </h4>
        :
            <h4 className={`option ${props.selectedOption === props.option? 'incorrect--option': ''}`}>
                {props.option}
            </h4>
    )
}

