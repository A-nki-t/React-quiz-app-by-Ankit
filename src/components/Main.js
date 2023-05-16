import {React, useContext} from 'react'
import Question from './Question';
import Submit__button from './Submit--button';
import { DataContext } from '../context/dataContext';
import Loader from './Loader'
export default function Main() {

  
  const { questionsArray, isLoading } = useContext(DataContext)

  let i = 0
  const QuestionComponent = questionsArray.map(ele => {

      return <Question currentQuestion={ele} id={i} key={i++}> </Question>
  })


    
    return isLoading?
    (
        <main>
            <Loader/>
        </main>
    )
    :
    (
        <main>
            {QuestionComponent}
            <Submit__button/>
        </main>
    )
}

