import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import ExamplePlant from '../components/Example-Plant';
import Navbar from '../components/Navbar';
import compassIcon from '../icons/compass-icon-4.png';
import searchIcon from '../icons/search-icon-3.png';
import xIcon from '../icons/x-button-icon.png';
import Footer from '../components/Footer';
import MapComponent from "../components/MapComponent.js";

const plants_api_url = 'https://explorer.natureserve.org/api/data/speciesSearch';


const customIdError = "custom-id-no";
const customIdError2 = "custom-id-no-2";

function ExplorePage() {

  const [plantData, setPlantData] = useState(null);

  const [state, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  { /*search here*/}
  const searchState = async (stateName) => {
    // Map state name to abbreviation
    const stateAbbreviations = {
      Alabama: 'AL',
      Alaska: 'AK',
      Arizona: 'AZ',
      Arkansas: 'AR',
      California: 'CA',
      Colorado: 'CO',
      Connecticut: 'CT',
      Delaware: 'DE',
      Florida: 'FL',
      Georgia: 'GA',
      Hawaii: 'HI',
      Idaho: 'ID',
      Illinois: 'IL',
      Indiana: 'IN',
      Iowa: 'IA',
      Kansas: 'KS',
      Kentucky: 'KY',
      Louisiana: 'LA',
      Maine: 'ME',
      Maryland: 'MD',
      Massachusetts: 'MA',
      Michigan: 'MI',
      Minnesota: 'MN',
      Mississippi: 'MS',
      Missouri: 'MO',
      Montana: 'MT',
      Nebraska: 'NE',
      Nevada: 'NV',
      "New Hampshire": 'NH',
      "New Jersey": 'NJ',
      "New Mexico": 'NM',
      "New York": 'NY',
      "North Carolina": 'NC',
      "North Dakota": 'ND',
      Ohio: 'OH',
      Oklahoma: 'OK',
      Oregon: 'OR',
      Pennsylvania: 'PA',
      "Rhode Island": 'RI',
      "South Carolina": 'SC',
      "South Dakota": 'SD',
      Tennessee: 'TN',
      Texas: 'TX',
      Utah: 'UT',
      Vermont: 'VT',
      Virginia: 'VA',
      Washington: 'WA',
      "West Virginia": 'WV',
      Wisconsin: 'WI',
      Wyoming: 'WY',

      alabama: 'AL',
      alaska: 'AK',
      arizona: 'AZ',
      arkansas: 'AR',
      california: 'CA',
      colorado: 'CO',
      connecticut: 'CT',
      delaware: 'DE',
      florida: 'FL',
      georgia: 'GA',
      hawaii: 'HI',
      idaho: 'ID',
      illinois: 'IL',
      indiana: 'IN',
      iowa: 'IA',
      kansas: 'KS',
      kentucky: 'KY',
      louisiana: 'LA',
      maine: 'ME',
      maryland: 'MD',
      massachusetts: 'MA',
      michigan: 'MI',
      minnesota: 'MN',
      mississippi: 'MS',
      missouri: 'MO',
      montana: 'MT',
      nebraska: 'NE',
      nevada: 'NV',
      'new hampshire': 'NH',
      "new jersey": 'NJ',
      "new mexico": 'NM',
      "new york": 'NY',
      "north carolina": 'NC',
      "north dakota": 'ND',
      ohio: 'OH',
      oklahoma: 'OK',
      oregon: 'OR',
      pennsylvania: 'PA',
      "rhode island": 'RI',
      "south carolina": 'SC',
      "south dakota": 'SD',
      tennessee: 'TN',
      texas: 'TX',
      utah: 'UT',
      vermont: 'VT',
      virginia: 'VA',
      washington: 'WA',
      "west virginia": 'WV',
      wisconsin: 'WI',
      wyoming: 'WY',
      "": "N/A"
      // Add more state mappings as needed
    };

    const stateAbbreviation = stateAbbreviations[stateName];

    if (!stateAbbreviation) {
      { /*if (!isValidState)*/ }
      toast.error("Please enter a valid US state", {
        toastId: customIdError
      });
      return;
    }

    try {
      const response = await fetch(plants_api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          criteriaType: 'species',
          textCriteria: [],
          statusCriteria: [],
          locationCriteria: [{
            paramType: 'subnation',
            subnation: stateAbbreviation,  // Replace 'state' with the actual state code or name
            nation: 'US',
          }],
          pagingOptions: {
            page: null,
            recordsPerPage: 12,
          },
          recordSubtypeCriteria: [],
          modifiedSince: null,
          locationOptions: {
            origin: 'onlyNatives',
          },
          classificationOptions: null,
          speciesTaxonomyCriteria: [{
            "paramType": "informalTaxonomy",
            "informalTaxonomy": "Plants"
          }],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setState(data.results);
      console.log(data.results)
    } catch (error) {
      console.error('Error fetching data:', error.message);
      toast.error("Error fetching data", {
        toastId: customIdError2
      });
    }
  };

  useEffect(() => {
    searchState('');
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchState(searchTerm);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
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
              <div className='search-inner-container'>
                <img className="search-icon" src={searchIcon} alt="Search Icon" />
                <input
                  id='search'
                  className="search"
                  type="text"
                  placeholder="Enter state"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>

              {searchTerm && (
                <img className="x-icon" src={xIcon} alt="X Icon" onClick={handleClearSearch} />
              )}
            </div>
          </div>


          {/*<MapComponent data={data} width={500} height={300} /> */}

          <div className="block-ex">

            {
              state?.length > 0 ? (
                <div>
                  {/*console.log(state)*/}
                  <div id="example-plants-grid">
                    {state.map((plant) => (
                    
                      <ExamplePlant plant={plant}/>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="empty">
                    {/* <h2>No Plants Found</h2> */}
                    <h2 className="spacer"></h2>
                </div>
              )
            }


          </div>

        </div>

        <Footer />
        
      </div>
      <ToastContainer />
    </div>

  );
}

export default ExplorePage;
