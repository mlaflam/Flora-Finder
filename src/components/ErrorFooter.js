import React from 'react'
import '../style.css';
import gitIcon from '../icons/git-icon.png';

const ErrorFooter = () => {
  return (
    <footer className="error-footer">
      <div className='footer-container'>
        <div className='footer-section'>
          <div className='footer-title'>FloraFinder</div>

          <div className='footer-content'>Explore</div>
          <div className='footer-content'>About</div>
          <div className='footer-content'>Sign In</div>
        </div>

        <div className='footer-section'>
          <div className='footer-title'>API's and Data</div>

          <div className='footer-content'>NatureServe</div>
          <div className='footer-content'>Trefle</div>
        </div>

        <div className='footer-section'>
          <div className='footer-title'>Learn More</div>

          <div className='github-container '>
            <img className="git-icon-footer" src={gitIcon} alt="Git Icon" />
            <div className='footer-content'>Github</div>
          </div>

          <div className='footer-content'>Contact Us</div>
        </div>
      </div>
    </footer>
  )
}

export default ErrorFooter