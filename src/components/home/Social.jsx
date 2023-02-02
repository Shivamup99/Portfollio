import React from 'react'
import './home.css'
const Social = () => {
  return (
    <div className='home_social'>
        <a href="https://www.linkedin.com/in/shivamup" className="home_social-link" target='_blank' rel="noreferrer">
        <i style={{color:'slateblue'}} className="icon-social-linkedin"></i>
        </a>
        <a href="https://github.com/Shivamup99?tab=repositories" className="home_social-link" target='_blank' rel="noreferrer">
        <i className="icon-social-github"></i>
        </a>
        <a href="https://www.instagram.com/whoshivam45" className="home_social-link" target='_blank' rel="noreferrer">
        <i style={{color:'brown'}} className="icon-social-instagram"></i>
        </a>
        <a href="https://twitter.com/?lang=en" className="home_social-link" target='_blank' rel="noreferrer">
        <i style={{color:'skyblue'}} className="icon-social-twitter"></i>
        </a>
    </div>
   
  )
}

export default Social