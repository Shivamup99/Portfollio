import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../assets/logo.svg'
const Sidebar = () => {

  const [toogle,showMenu] = useState(false);

  return (
    <>
    <aside className={toogle ? 'aside show-menu' : 'aside'}>
     <a href="#home" className="nav_logo">
      <img src={Logo} alt='d'/>
     </a>
     <nav className='nav'>
      <div className="nav_menu">
        <ul className="nav_list">
          <li className="nav_item">
           <a href="#home" className="nav_link">
           <i className="icon-home"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#about" className="nav_link">
           <i className="icon-user-following"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#resume" className="nav_link">
           <i className="icon-graduation"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#services" className="nav_link">
           <i className="icon-briefcase"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#work" className="nav_link">
           <i className="icon-layers"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#certifications" className="nav_link">
           <i className="icon-note"></i>
           </a>
          </li>
          <li className="nav_item">
           <a href="#contact" className="nav_link">
           <i className="icon-bubble"></i>
           </a>
          </li>
        </ul>
      </div>
     </nav>
     <div className="nav_footer">
      <span className="copyright">&copy; 2023 - 2024.</span>
     </div>
    </aside>
    <div className={toogle ? "nav_toggle nav_toggle-open":"nav_toggle"}
     onClick={()=>showMenu(!toogle)}
    >
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar