import React from 'react'

const Card = ({item}) => {
  return (
    <div className='timeline_item'>
        <i className={item?.icon}></i>
        <span className="timeline_date">{item?.year}</span>
        <h3 className="timeline_title">{item?.title}</h3>
        <p className="timeline_text">{item?.desc}</p>
        <p className="timeline_texts">{item?.res}</p>
    </div>
  )
}

export default Card