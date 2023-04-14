import React from 'react'
import './Data.css'
const Data = (props) => {
    const data = props.data;
  return (
    <div className='container'>
    {
        data.map((e)=>{
            return (
                <div className='result' key ={e.key}>{e.name} ({e.age} Years old) College Name : {e.collegeName}</div>
            )
        })
    }
    </div>
  )
}

export default Data