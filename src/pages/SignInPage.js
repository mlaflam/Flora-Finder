import '../style.css';
import Navbar from '../components/Navbar';
import plantIcon from '../icons/leaf-icon-3.png';
import searchIcon from '../icons/search-icon-3.png';
import Footer from '../components/Footer';


function SignInPage() {
  return (

    <div>
      <div className="block-main">
        <Navbar />

        <div className="block">

          <div id="search-box-container">
            <div className="explore-container">
              <img className="explore-icon" src={plantIcon} alt="Compass Icon" />

              <div className="explore-title">Sign In</div>
            </div>
            <div className="explore-container">
              <img className="explore-icon" src={plantIcon} alt="Compass Icon" />

              <div className="explore-title">Continue as Guest</div>
            </div>

            <div className="explore-info">
              Explore, learn, and connect with the unique plants that call each state home.
            </div>

            <div id="search-container">
              <img className="search-icon" src={searchIcon} alt="Search Icon" />
              <input className="search" type="text" id="city" placeholder="Enter state" />
            </div>

          </div>

          

        </div>

        <Footer />

      </div>

    </div>

  );
}

export default SignInPage;
