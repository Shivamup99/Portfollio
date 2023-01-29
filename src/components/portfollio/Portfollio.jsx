/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './portfollio.css'
import { DataMenu } from './DataMenu'
const Portfollio = () => {
  const [items,setItems] = useState(DataMenu)
  
  const filterItem =(categoryItem)=>{
    const updateItems = DataMenu.filter((cur)=>{
      return cur.category === categoryItem
    });
    setItems(updateItems)
  }

  return (
    <div className='work container section' id='work'>
      <h2 className="section_title">
        Recent Projects
      </h2>
      <div className="work_filters">
        <span className="work_item" onClick={()=>setItems(DataMenu)} >All</span>
        <span className="work_item" onClick={()=>filterItem('Frontend')}>Frontend</span>
        <span className="work_item" onClick={()=>filterItem('Backend')}>Backend</span>
        <span className="work_item" onClick={()=>filterItem('UI/UX')}>UI/UX Design</span>
        <span className="work_item" onClick={()=>filterItem('certificate')}>Certificates</span>
      </div>

      <div className="work_container grid">
       {items.map((ele,id)=>{
         return(
          <div className="work_card" key={id}>
            <div className="work_thumb">
              <img src={ele.image} alt='ss' className='work_img'/>
              <div className="work_mask">

              </div>
              <span className="work_category">
                {ele.category}
              </span>
              <h3 className="work_title">{ele.title}</h3>
              <a href="#" className="work_button">
                <i className='icon-link work_button-icon'></i>
              </a>
            </div>
          </div>
         )
       })}
      </div>
    </div>
  )
}

export default Portfollio