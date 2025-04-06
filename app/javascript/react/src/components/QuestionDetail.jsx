import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = { like: this.props.question.like_counter, disLike: this.props.question.dislike_counter }

    this.updateLikeCounter = this.updateLikeCounter.bind(this)
    this.updateDisLikeCounter = this.updateDisLikeCounter.bind(this)
  }

  updateLikeCounter () {
    this.setState(function(state){
      return {
        like: state.like + 1
      }
    })
    this.updateQuestionCounter({count_for: "like"})
  }

  updateDisLikeCounter () {
    this.setState(function(state){
      return {
        disLike: state.disLike + 1
      }
    })
    this.updateQuestionCounter({count_for: 'dislike'})
  }

  updateQuestionCounter = (data) => {
    fetch(`http://localhost:3000/api/v1/questions/${this.props.question.id}/update_counter`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error;
      })
  }

  render () {
    return(
      <div className="card border rounded-xl bg-white shadow-md text-gray-800 p-4 space-y-2">
        <div className="text-sm font-medium text-purple-600 pb-1">
          {this.props.question.tag}
        </div>
        <div className="card-title text-xl font-semibold text-gray-900">
          {this.props.question.title}
        </div>
        <div className="card-body text-gray-700">
          {this.props.question.body}
        </div>
        <div className="flex justify-center gap-6 pt-2">
          <div className="flex items-center gap-2">
            <button
              className="btn bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium px-3 py-1 rounded-md transition"
              onClick={this.updateLikeCounter}
            >
              Like
            </button>
            {this.state.like > 0 && (
              <span className="text-blue-700 font-semibold">{this.state.like}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn bg-red-100 hover:bg-red-200 text-red-600 font-medium px-3 py-1 rounded-md transition"
              onClick={this.updateDisLikeCounter}
            >
              DisLike
            </button>
            {this.state.disLike > 0 && (
              <span className="text-red-700 font-semibold">{this.state.disLike}</span>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionDetail;