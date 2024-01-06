import { useEffect, useState, onKeyUp } from "react";
import '../style.css';
import ExamplePlant from '../components/Example-Plant';
import Navbar from '../components/Navbar';
import compassIcon from '../icons/compass-icon-4.png';
import searchIcon from '../icons/search-icon-3.png';
import Footer from '../components/Footer';

const API_URL = 'https://www.omdbapi.com?apikey=e0340b1'

function ExplorePage() {
  const validStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii",
    "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
    "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
 ]
  

  const [state, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchState = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setState(data.Search);
    console.log("sucess?")
  }

  useEffect(() => {
    searchState('');
  }, []);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchState(searchTerm);
      {/* console.log("enter pressed") */ }
    }
  };

  return (

    <div>
      <div className="block-main">
        <Navbar />

        <div className="block">

          <div id="search-box-container">
            <div className="explore-container">
              <img className="explore-icon" src={compassIcon} alt="Compass Icon" />
              <div className="explore-title">Explore</div>
            </div>

            <div className="explore-info">
              Explore, learn, and connect with the unique plants that call each state home.
            </div>

            <div id="search-container">
              <img className="search-icon" src={searchIcon} alt="Search Icon" />
              <input id='search' className="search" type="text" placeholder="Enter state"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                 />
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

export default ExplorePage;
