import React from 'react'
import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

import leafIconThree from '../icons/leaf-icon-3.png';


const ErrorPage = () => {
  return (

      <div>
        <div className="block-main">
          <Navbar />

          <div className="block">

            <div id="search-box-container">
              <div className="explore-container">
                <img className="explore-icon" src={leafIconThree} alt="Plant Preview" />
                <div className="explore-title">Error 404</div>
              </div>

              <div className="explore-info">
                Sorry, the page you were looking for does not exist. 
            </div>
            <div className="link-back">
                <Link to='/' className='title-link' >Back to main</Link>
            </div>



            </div>

          </div>

          <Footer />

        </div>

      </div>

    );
  }

export default ErrorPage