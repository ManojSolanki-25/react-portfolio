import React from "react"
import ReactDOM from "react-dom"
import { useState , useEffect} from 'react'
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
  const [questionList, setQuestionList] = useState([])
  const url = "http://localhost:3000/api/v1/questions"

  const fetchQuestionList = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuestionList(data)
      })
  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  return (
    <div className="text-center">
      {questionList.map((question) =>
        <QuestionDetail question={question} key={question.id}/>
      )}
    </div>
  )
}

export default QuestionList