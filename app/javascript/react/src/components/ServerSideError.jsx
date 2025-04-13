import React from 'react'
import {useState, useEffect} from 'react'


const ServerSideError = (props) => {
 return(
  <div>
    <h3>Errors:</h3>
    <div className='text-red-600 mt-2'>
    {props.errors.map((error, index) => {
      return <p key={index}>{error}</p>
    })}
    </div>
  </div>
 )
}

export default ServerSideError;