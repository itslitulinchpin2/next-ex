'use client'
import React from 'react'
import { useState } from 'react'
export default function Counter() {
const [count,setCount]=useState(0);
console.log('client component!!!')
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>{
        setCount((num)=>num+1)
        }}>숫자증가</button>
    </>
  )
}
