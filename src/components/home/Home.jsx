import React from 'react'
import './home.css'
import Me from '../../assets/shiva.jpg'
import Social from './Social'
import ScrollDown from './ScrollDown'
const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        <img src={Me} alt='d' className='home_img'/>
        <h1 className="home_name">Shivam Upadhyay</h1>
          <span className="home_education">
               I'm a Web Developer
          </span>
        <Social/>
        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home