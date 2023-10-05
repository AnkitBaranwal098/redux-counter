import React from 'react'
import {useDispatch} from "react-redux";
import {increementCounter, decreementCounter, resetCounter} from "./counterSlics";

const ButtonWrapper = () => {
  const dispatch = useDispatch();

  const handlePlus = ()=>{
    dispatch(increementCounter());
  }

  const handleMinus = ()=>{
    dispatch(decreementCounter())
  }

  const handleReset = ()=>{
    dispatch(resetCounter());
  }

  return (
    <div>
        <button className='btn' onClick={()=>handlePlus()}>+1</button>
        <button className='btn' onClick={()=>handleMinus()}>-1</button>
        <button className='btn' onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default ButtonWrapper