import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = { like: 0, disLike: 0 }

    this.updateLikeCounter = this.updateLikeCounter.bind(this)
    this.updateDisLikeCounter = this.updateDisLikeCounter.bind(this)
  }

  updateLikeCounter () {
    this.setState(function(state){
      return {
        like: state.like + 1
      }
    })
  }

  updateDisLikeCounter () {
    this.setState(function(state){
      return {
        disLike: state.disLike + 1
      }
    })
  }
  render () {
    return(
      <div className="card border text-green-300">
        <div className="card-title">{this.props.question.title}</div>
        <div className="card-body">{this.props.question.body}</div>
        <div className='flex justify-center gap-2'>
          <div className="flex flex-wrap ">
            <button className="btn border-t-cyan-100 text-blue-500" onClick={this.updateLikeCounter}>Like</button>
            { this.state.like > 0 ? <span className='ml-1 text-blue-600'>{this.state.like}</span>  : <></> }
          </div>
          <div className="flex flex-wrap">
            <button className="btn border-t-red-100 text-red-500" onClick={ this.updateDisLikeCounter}>DisLike</button>
            { this.state.disLike > 0 ? <span className='ml-1 text-red-600'>{this.state.disLike}</span> : <></>}
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionDetail;