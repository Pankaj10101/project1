import React from 'react'
import './Data.css'
const Data = (props) => {
    const data = props.data;
  return (
    <div className='container'>
    {
        data.map((e)=>{
            return (
                <div className='result'>{e.name} ({e.age} Years old)</div>
            )
        })
    }
    </div>
  )
}

export default Data