import React from 'react'
import ButtonWrapper from './ButtonWrapper'
import {useSelector} from "react-redux";

const Counter = () => {

  const value = useSelector((store)=>store.counter.value)
  
  return (
    <div>
        <h1>{value}</h1>
        <ButtonWrapper/>
    </div>
  )
}

export default Counter