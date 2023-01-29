/* eslint-disable array-callback-return */
import React from 'react'
import './resume.css'
import {Data} from './Data'
import Card from './Card'
const Resume = () => {
  return (
    <div className='resume container sectio' id='resume'>
      <h2 className="section_title">
        Experience
      </h2>
      <div className="resume_container grid">
        <div className="timeline grid">
        {Data.map((item,id)=>{
          if(item.category ==='education'){
            return(
              <Card key={id} item={item}/>
            )
          }
        })}
        </div>

        <div className="timeline grid">
        {Data.map((item,index)=>{
          if(item.category ==='experience'){
            return(
              <Card key={index} item={item}/>
            )
          }
        })}
        </div>
      </div>
    </div>
  )
}

export default Resume