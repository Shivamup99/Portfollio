import React from 'react'
import './about.css'
import AboutImg from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section_title">
        About Me
      </h2>
      <div className="about_container grid">
       <img src={AboutImg} alt="ss" className='about_img' />
       <div className="about_data grid">
        <div className="about_info">
          <p className="about_des">
          I am a highly skilled and experienced software engineer with a proven track record of delivering high-quality, innovative solutions to complex problems. I am proficient in a wide range of programming languages, including Java, Python, and C++, and have experience working with various technologies and platforms, such as web development, databases, and cloud computing.

          </p>
          <a href="#cv" className="btn">Download CV</a>
        </div>

        <div className="about_skills grid">
         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
              Angular
            </h3>
            <span className="skills_number">
              75%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent angular"></span>
          </div>
         </div>

         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
              UI/UX design
            </h3>
            <span className="skills_number">
              84%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent ui_design"></span>
          </div>
         </div>

         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
              React Js
            </h3>
            <span className="skills_number">
              70%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent react"></span>
          </div>
         </div>

         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
             Node Js & Express
            </h3>
            <span className="skills_number">
             65%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent node"></span>
          </div>
         </div>

         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
             MongoDB & MySql
            </h3>
            <span className="skills_number">
               62%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent mongo"></span>
          </div>
         </div>

         <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">
             DevOps (Git , AWS)
            </h3>
            <span className="skills_number">
               55%
            </span>
          </div>
          <div className="skills_bar">
            <span className="skills_percent dev"></span>
          </div>
         </div>
        </div>
       </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About