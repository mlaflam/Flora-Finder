import React from 'react'
import '../style.css';
import leafIcon from '../icons/leaf-icon.png';
import gitIcon from '../icons/git-icon.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">

      <div className="left-section">
        <Link to='/' className='LINK' >
          <img className="leaf-icon" src={leafIcon} alt="Leaf Icon" />
        </Link>

        <div className="title" >
          <Link to='/' className='LINK' >FloraFinders</Link>
        </div>

        <div className="header-link">

          <div>
            <li className="header-name-left"><Link to='/Explore' className='LINK' >Explore</Link></li>
          </div>

        </div>
        <div className="header-link">
          <div>
            <li className="header-name-left"><Link to='/About' className='LINK' >About</Link></li>
          </div>
        </div>
      </div>



      <div className="right-section">
        <div className="sign-in-container">
          Sign in
        </div>
        <a href="https://github.com/mlaflam/flora-finder-website" target="_blank">
          <img className="git-icon" src={gitIcon} alt="GitHub Icon" />
        </a>
      </div>


    </header>
  )
}

export default Navbar