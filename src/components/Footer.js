import React from 'react'
import '../style.css';

import gitIcon from '../icons/git-icon.png';
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className='footer-section'>
          <div className='footer-title'>FloraFinder</div>
          <div className="footer-content"><Link to='/flora-finder/Explore' className='LINK' >Explore</Link> </div>

          <div className="footer-content"><Link to='/flora-finder/About' className='LINK' >About</Link> </div>
          <div className="footer-content"><Link to='/flora-finder/SignIn' className='LINK' >Sign In</Link> </div>

        </div>

        <div className='footer-section'>
          <div className='footer-title'>API's and Data</div>

          <a className='LINK' href="https://explorer.natureserve.org/" target='_blank'>
            <div className='footer-content'>NatureServe</div>
          </a>
          <a className='LINK' href="https://trefle.io/" target='_blank'>
            <div className='footer-content'>Trefle</div>
          </a>

        </div>

        <div className='footer-section'>
          <div className='footer-title'>Learn More</div>

          <div className='github-container'>
            <a id="github-container" className='LINK' href="https://github.com/mlaflam/flora-finder-website" target='_blank'>
              <img className="git-icon-footer" src={gitIcon} alt="Git Icon" />
              <div className='footer-content'>Github</div>
            </a>
            
          </div>

          <div className="footer-content"><Link to='/flora-finder/About#Contact' className='LINK' >Contact Us</Link> </div>
        </div>
      </div>
      
    </footer>
    
  )
}

export default Footer