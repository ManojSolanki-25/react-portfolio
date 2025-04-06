import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const QuestionDetail = (props) => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return(
    <div className="card border text-green-300">
      <div className="card-title">{props.question.title}</div>
      <div className="card-body">{props.question.body}</div>
      <div className='flex justify-center gap-2'>
        <div className="flex flex-wrap ">
          <button className="btn border-t-cyan-100 text-blue-500" onClick={() => setLike(like + 1)}>Like</button>
          { like > 0 ? <span className='ml-1 text-blue-600'>{like}</span>  : <></> }
        </div>
        <div className="flex flex-wrap">
          <button className="btn border-t-red-100 text-red-500" onClick={ () => setDisLike(disLike + 1)}>DisLike</button>
          { disLike > 0 ? <span className='ml-1 text-red-600'>{disLike}</span> : <></>}
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail;