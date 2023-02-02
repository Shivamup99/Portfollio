import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>
         <div className="about_box">
            <i className='about_icon icon-fire'></i>
            <div>
                <h3 className='about_title'>90+</h3>
                <span className='about_sub'>Projects Github Repo</span>
            </div>
         </div>

         <div className="about_box">
            <i className='about_icon icon-screen-desktop'></i>
            <div>
                <h3 className='about_title'>40+</h3>
                <span className='about_sub'>Full Stack Projects</span>
            </div>
         </div>

         <div className="about_box">
            <i className='about_icon icon-equalizer'></i>
            <div>
                <h3 className='about_title'>5+</h3>
                <span className='about_sub'>Certifications</span>
            </div>
         </div>

         <div className="about_box">
            <i className='about_icon icon-chart'></i>
            <div>
                <h3 className='about_title'>1+</h3>
                <span className='about_sub'>Experirence</span>
            </div>
         </div>
    </div>
  )
}

export default AboutBox