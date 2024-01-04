import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import leafIconThree from '../icons/leaf-icon-3.png';


function AboutPage() {
  return (

    <div>
      <div className="block-main">
        <Navbar />

        <div className="block">

          <div id="search-box-container">
            <div className="explore-container">
              <a href="https://mlaflam.github.io/simple-website/">
                <img className="explore-icon" src={leafIconThree} alt="Plant Preview" />
              </a>
              <div className="explore-title">About</div>
            </div>

            <div className="explore-info">
              General informations, privacy and contacts.
            </div>



          </div>

          <div className='about-info'>
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
            Explore, learn, and connect with the unique plants that call each state home.
            Explore, learn, and connect with the unique plants that call each state home.
            Explore, learn, and connect with the unique plants that call each state home.
            Explore, learn, and connect with the unique plants that call each state home.
            Explore, learn, and connect with the unique plants that call each state home.
            Explore, learn, and connect with the unique plants that call each state home.
            

          </div>

        </div>

        <Footer />

      </div>

    </div>

  );
}

export default AboutPage;
