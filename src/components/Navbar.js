import React from 'react'
import '../style.css';
import leafIconThree from '../icons/leaf-icon-3.png';
import gitIcon from '../icons/git-icon.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">

      <div className="left-section">
        

        <div className="title" >
          <Link to='/' className='title-link' >FloraFinders</Link>
        </div>
        <Link to='/' className='LINK' >
          <img className="leaf-icon" src={leafIconThree} alt="Leaf Icon" />
        </Link>

        
      </div>



      <div className="right-section">
        <div className="right-section-inner">
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

        <div className="right-section-inner">
          <div className="sign-in-container">
            <div>
              <li className="header-name-left"><Link to='/SignIn' className='LINK' >Sign In</Link></li>
            </div>
          </div>
          <a href="https://github.com/mlaflam/flora-finder-website" target="_blank">
            <img className="git-icon" src={gitIcon} alt="GitHub Icon" />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Navbar