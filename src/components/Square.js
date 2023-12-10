import React from 'react'
import '../App.css'
const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    className='box'>
        <h5 className='square'>{props.value}</h5>
    </div>
  )
} 

export default Square;