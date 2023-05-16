import {React, useEffect, useState} from 'react'
import Question from './Question';

export default function Main() {
    const [questionsArray,setQuestionArray] = useState({
        question: "You have to tell me why the fuck is this cola veri d ?",
        option1: "cola is very d",
        option2: "IDK",
        option3: "tu kya jane dard mera",
        option4: "rahulGand said",
        answer: "rahulGand said",
        isSelectd: true
    })

    

    // useEffect(()=> {
    //     fetch("https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple")
    //     .then(res => res.json())
    //     .then(data => {setQuestionArray(data.results) 
    //         return data.results.map((ele) => {
    //             return {
    //                 question: ele.question,
    //                 correct_answer: ele.correct_answer,
    //                 selectdOption: 0,
    //                 options: [{
    //                         option1:ele.correct_answer,
    //                         option2:ele.incorrect_answers[0],
    //                         option3:ele.incorrect_answers[1],
    //                         option4:ele.incorrect_answers[2],
    //                 }]
    //             }
    //         });
    //     })
    // },[])

    // return {
    //     question: ele.question,
    //     correct_answer: ele.correct_answer,
    //     selectdOption: 0,
    //     options: [{
    //             option1:ele.correct_answer,
    //             option2:ele.incorrect_answers[0],
    //             option3:ele.incorrect_answers[1],
    //             option4:ele.incorrect_answers[2],
    //     }]
    // }
    
    // const questionComponent = questionsArray.map(question => {
    //     return (`<Question questionsArray= ${{question}}`)
    // })

    return (
        <main>
            <Question questionsArray= {questionsArray}  />   
            <Question questionsArray= {questionsArray}  />   
            <Question questionsArray= {questionsArray}  />   
            <Question questionsArray= {questionsArray}  />   
        </main>
    )
}





// category
// : 
// "Science: Computers"
// correct_answer
// : 
// "Moving Picture"
// difficulty
// : 
// "easy"
// incorrect_answers
// : 
// (3) ['Music Player', 'Multi Pass', 'Micro Point']
// question
// : 
// "What does the &quot;MP&quot; stand for in MP3?"



        // function setAllOptions() {
        //     setQuestionArray(prevArray => {
        //         let newArrObj =[{}]
        //         newArrObj = [...prevArray]
        //         // console.log(newArrObj[0].options);
        //         // newObj.options.push(newObj.correct_answer);
        //         // newObj.options = shuffleArray(newObj.options);
        //         console.log(newArrObj[0].options);
        //         newArrObj.forEach(ele => {
        //             // ele.options = [...(ele.options),ele.correct_answer]
        //             console.log(ele);
        //         })
        //         return newArrObj
        //     })
        // }


    //     useEffect(()=> {
    //     fetch("https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple")
    //     .then(res => res.json())
    //     .then(data => {setQuestionArray(data.results) 
    //         return data.results.map((ele) => {
    //             return {
    //                 question: ele.question,
    //                 correct_answer: ele.correct_answer,
    //                 selectdOption: 0,
    //                 options: [{
    //                         option1:ele.correct_answer,
    //                         option2:ele.incorrect_answers[0],
    //                         option3:ele.incorrect_answers[1],
    //                         option4:ele.incorrect_answers[2],
    //                 }]
    //             }
    //         });
    //     })
    // },[])

    // useEffect(() => {
    //     fetch("https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])