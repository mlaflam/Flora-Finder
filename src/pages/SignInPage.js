import '../style.css';
import ExamplePlant from '../components/Example-Plant';
import Navbar from '../components/Navbar';
import compassIcon from '../icons/compass-icon-4.png';
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
                <img className="explore-icon" src={compassIcon} alt="Compass Icon" />

              <div className="explore-title">SIGNIN</div>
            </div>

            <div className="explore-info">
              Explore, learn, and connect with the unique plants that call each state home.
            </div>

            <div id="search-container">
              <img className="search-icon" src={searchIcon} alt="Search Icon" />
              <input className="search" type="text" id="city" placeholder="Enter state" />
            </div>

          </div>

          <div className="block-ex">
            <div id="example-plants-grid">

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />

              <ExamplePlant />



            </div>
          </div>

        </div>

        <Footer />

      </div>

    </div>

  );
}

export default SignInPage;
