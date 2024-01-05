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
              At FloraFinders, our mission is to foster a deeper connection between individuals and the
              native beauty of their local ecosystems. We have created a platform that empowers users to
              explore and appreciate the rich tapestry of native plants in their state. By seamlessly enabling
              users to search for and discover the unique flora of their region, Florafinders strives to cultivate
              a sense of appreciation for local biodiversity. We believe that fostering this connection with nature is not
              only enriching for individuals but also plays a crucial role in the preservation of native ecosystems.
              Join us on a journey to rediscover and protect the natural wonders that surround us, one native plant at a time.

            </div>

          </div>

        </div>

        {/* DATA */}
        <div className="section-block">
          <div className='about-page-section' >
            
            <div className="section-container">
                <img className="section-icon" src={dataIcon} alt="Data Icon" />

              <div className="section-title">Data</div>
            </div>

            <div className='section-info'>
              <div className='data-section-info'>FloraFinders exclusively gathered data regarding native plants from Trefle REST API and NatureServe Explorer REST API.</div>
              
              <div className='image-section'>
                <a href="https://explorer.natureserve.org/" target='_blank'>
                  <img className="api-icon" src={natureServe} alt="Nature Serve" />
                </a>
                <a href="https://trefle.io/" target='_blank'>
                  <img className="api-icon" src={trefleAPI} alt="Trefle API" />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* CONTACT */}
        <hr className='line'></hr>
        <div className="section-block">
          <div className='about-page-contact-section' >


            <div className="section-container">
              <img className="contact-section-icon" src={mailIcon} alt="Mail Icon" />
              <div className="section-title">Contact Us</div>
            </div>

            <div className='contact-form-block'>

              <div className='contact-form-top-block'>
                <div className='contact-form-top-block-two'>
                  <div className='contact-form-inner-block'>
                    <div className='contact-info'>Full Name</div>
                    <input className='name-info' type="text" placeholder="Name" />
                  </div>
                  <div className='contact-form-inner-block'>
                    <div className='contact-info'>Email Address</div>
                    <input className='email-info' type="text" placeholder="Email" />
                  </div>

                </div>
              </div>

              <div>
                <div className='contact-info'>Message</div>
                <textarea className='message-info' placeholder="Message" />
              </div>

              <div className='button-block'>
                <button className='contact-button'>Send Message</button>
              </div>
              
              

            </div>




          </div>

        </div>
        <Footer />

      </div>

    </div>

  );
}

export default AboutPage;
