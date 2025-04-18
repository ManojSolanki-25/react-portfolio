import React from "react"
import ReactDOM from "react-dom"
import { useState , useEffect} from 'react'
import QuestionDetail from "./QuestionDetail";
import EmptyContainer from "./EmptyContainer";
import LoaderContainer from "./LoaderContainer";
import Modal from "./Modal";

const QuestionList = () => {
  const questionTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 }
  ]

  const [selectOption, setSelectOption] = useState(questionTags[0].value)
  const [questionList, setQuestionList] = useState([])
  const url = "http://localhost:3000/api/v1/questions"
  const [isShowAlert, setIsSetAlert] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);

  const fetchQuestionList = () => {
    setIsShowLoader(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuestionList(data)
        updateAlert(data)
      })
  }

  const updateAlert = (data) => {
    if (data.length == 0){
      setIsSetAlert(true)
      setIsShowLoader(false)
    }
    else{
      setIsSetAlert(false)
    }

  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  const updateSelectedItem = (event) => {
    setIsShowLoader(true)
    setQuestionList([])
    setSelectOption(event.target.value)
    fetch(url + `?tag=${questionTags[event.target.value].label}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setQuestionList(data)
      updateAlert(data)
    })
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(questionList.length);

  return (
    <div className="text-center">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rails 8 + React + Tailwind Modal</h1>
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle="Add Question Detail">
        <p className="text-gray-700">
          This is a Tailwind-styled modal in your Rails 8 project!
        </p>
      </Modal>
    </div>

     <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-1">Filter by tag</p>
        <select
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          value={selectOption}
          onChange={event => updateSelectedItem(event)}
        >
          {
            questionTags.map((tag) =>
              <option key={tag.value} value={tag.value}>{tag.label}</option>
            )
          }
        </select>
      </div>
      { questionList.length > 0 ? (
        <>
          {questionList.map((question) =>
          <QuestionDetail question={question} key={question.id}/>
        )}
        </> ) : <LoaderContainer isShowLoader={isShowLoader}/>
       }

       {
         isShowAlert && (
          <>
            <EmptyContainer/>
          </>
         )
       }
    </div>
  )
}

export default QuestionList