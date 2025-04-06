import React from "react"
import ReactDOM from "react-dom"
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
  const questionList = [
    {
      id: 1,
      title: "First Tittle",
      body: "first tile description is here"
    },
    {
      id: 2,
      title: "First Tittle",
      body: "first tile description is here"
    },
    {
      id: 3,
      title: "First Tittle",
      body: "first tile description is here"
    },
    {
      id: 4,
      title: "First Tittle",
      body: "first tile description is here"
    },
    {
      id: 5,
      title: "First Tittle",
      body: "first tile description is here"
    },
    {
      id: 6,
      title: "First Tittle",
      body: "first tile description is here"
    }
  ]

  return (
    <div className="text-center">
      {questionList.map((question) =>
        <QuestionDetail question={question} key={question.id}/>
      )}
    </div>
  )
}

export default QuestionList