import React from 'react'
import './service.css'
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';


const data =[
    {
        id:1,
        image:Image1,
        title:'UI/UX design',
        desc:'Experience with Web development using HTML, CSS, SCSS, Bootstrap, and JavaScript frameworks such as React and Angular'
    },
    {
        id:2,
        image:Image2,
        title:'Web Development',
        desc:'Experience with Web development using JavaScript frameworks for frontend such as React and Angular , Node Js, Express for backend.'
    },
    {
        id:3,
        image:Image3,
        title:'Database Issues',
        desc:'Experience with Web development for database I am using MongoDB , SQL, MySql'
    }
]

const Service = () => {
  return (
    <section className='services container section' id='services'>
        <h2 className="section_title">
            Services
        </h2>
        <div className="services_container grid">
            {data.map((item,id)=>{
                return(
                 <div className="services_card" key={id}>
                    <img src={item.image} alt="sss" className='services_img'/>
                    <h3 className="services_title">{item.title}</h3>
                    <span className="services_desc">{item.desc}</span>
                 </div>
                )
            })}
        </div>
    </section>
  )
}

export default Service