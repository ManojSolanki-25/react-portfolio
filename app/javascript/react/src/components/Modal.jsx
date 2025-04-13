import React, { useState } from 'react';
import ServerSideError from './ServerSideError';

const Modal = ({ isOpen, onClose, modalTitle }) => {
  if (!isOpen) return null;

  const questionTags = [
    { label: "Ruby", value: "Ruby" },
    { label: "Rails", value: "Rails" },
    { label: "React", value: "React" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "Data Structure", value: "Data Structure" }
  ]

  // const [tag, setTag] = useState(questionTags[0].value)
  // const [title, setTitle] = useState('')
  // const [dis, setDis] = useState('')

  // const handleTitle = (event) => {
  //   setTitle(event.target.value)
  // }

  // const handleTag = (event) => {
  //   setTag(event.target.value)
  // }

  // const handleDiscription = (event) => {
  //   setDis(event.target.value)
  // }

  const [formField, SetFormField] = useState({
    title: "", tag: questionTags[0].value, body: ""
  })

  const handleFormFields = (event) => {
    SetFormField({ ...formField, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({title: title, tag: tag, dis: dis})
    console.log(formField)
    createQuestion(formField)
  }

  const [isServerSideError, setIsServerSideError] = useState(false)
  const [serverSideError, setServerSideError] = useState([])

  const createQuestion = (data) => {
    fetch(`/api/v1/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data['status'] == "failure"){
          setIsServerSideError(true)
          setServerSideError(data["data"])
        }
        else{
          onClose()
          setIsServerSideError(false)
          setServerSideError([])
        }
      })
      .catch((error) => {
        console.error(error);
      })

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{modalTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        { isServerSideError && <ServerSideError errors={serverSideError}/>}

        <form className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* Tag Field */}
          <div className="mb-4">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
            <select
              id="tag"
              value={formField.tag} name="tag"
              // onChange={event => handleTag(event)}
              onChange={event => handleFormFields(event)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
              {questionTags.map((tag) =>
                <option key={tag.value} value={tag.value}>{tag.label}</option>
              )}
            </select>
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              value={formField.title}
              name="title"
              // onChange={event => handleTitle(event)}
              onChange={event => handleFormFields(event)}
              placeholder="Enter question title"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              rows="4"
              value={formField.body}
              name="body"
              // onChange={event => handleDiscription(event)}
              onChange={event => handleFormFields(event)}
              placeholder="Write your question details here..."
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;