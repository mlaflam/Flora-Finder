import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import leafIconThree from '../icons/leaf-icon-3.png';
import targetIcon from '../icons/target-icon-2.png';
import dataIcon from '../icons/data-icon-1.png';
import mailIcon from '../icons/mail-icon-1.png';
import natureServe from '../icons/nature-serve-api.png';
import trefleAPI from '../icons/trefle-api.png';


function AboutPage() {
  return (

    <div>
      <div className="block-main">
        <Navbar />

        <div className="block">

          <div id="search-box-container">
            <div className="explore-container">
              <img className="explore-icon" src={leafIconThree} alt="Leaf Icon" />
              <div className="explore-title">About</div>
            </div>

            <div className="explore-info">
              General informations, data, and contacts.
            </div>



          </div>

        </div>

        {/* MISSION */}
        <div className="section-block">
          <div className='about-page-section' >
            
            <div className="section-container">
              <img className="section-icon" src={targetIcon} alt="Target Icon" />
              <div className="section-title">Mission</div>
            </div>
            <div className='section-info'>
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.
              Explore, learn, and connect with the unique plants that call each state home.


            </div>

          </div>

        </div>

        {/* DATA */}
        <div className="section-block">
          <div className='about-page-section' >
            
            <div className="section-container">
                <img className="section-icon" src={dataIcon} alt="Plant Preview" />

              <div className="section-title">Data</div>
            </div>
            <div className='section-info'>
              All data used for this website was collected from  Trefle REST API and NatureServe Explorer REST API.
              <img className="api-icon" src={natureServe} alt="Plant Preview" />
              <img className="api-icon" src={trefleAPI} alt="Plant Preview" />

            </div>

          </div>

        </div>

        {/* CONTACT */}
        <div className="section-block">
          <div className='about-page-section' >
            <hr></hr>

            <div className="section-container">
                <img className="contact-section-icon" src={mailIcon} alt="Mail Icon" />
              <div className="section-title">Contact Us</div>
            </div>
            <div className='contact-form-block'>
              <div className='contact-info-form-block'>
                <input className='name-info' type="text" placeholder="Name" />
                <input className='email-info' type="text" placeholder="Email" />
              </div>
              <input className='subject-info' type="text" placeholder="Subject" />

            </div>




          </div>

        </div>
        <Footer />

      </div>

    </div>

  );
}

export default AboutPage;
