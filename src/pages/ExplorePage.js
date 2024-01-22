import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import '../darkstyle.css';
import ExamplePlant from '../components/Example-Plant';
import Navbar from '../components/Navbar';
import compassIcon from '../icons/compass-icon-4.png';
import searchIcon from '../icons/search-icon-3.png';
import xIcon from '../icons/x-button-icon.png';
import Footer from '../components/Footer';
import AdvancedSearch from "../components/AdvancedSearch.js";
import MapComponent from "../components/MapComponent.js";
import StateAbbreviations from '../components/StateAbbreviations.js';

const plants_api_url = 'https://explorer.natureserve.org/api/data/speciesSearch';


const customIdError = "custom-id-no";
const customIdError2 = "custom-id-no-2";

function ExplorePage() {

  const [state, setState] = useState([]);
  const [phylumStates, setPhylumStates] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  { /*PHYLUMS*/ }
  const phylums = ["Anthocerotophyta", "Bryophyta", "Charophyta", "Chlorophyta",
    "Cycadophyta", "Ginkgophyta", "Glaucophyta", "Gnetophyta", "Lycophyta",
    "Anthophyta", "Hepatophyta", "Coniferophyta", "Pteridophyta"];

  const phylumTitle = {
    Anthocerotophyta: 'Hornworts',
    Bryophyta: 'Mosses',
    Charophyta: 'Charophytes',
    Chlorophyta: 'Chlorophytes',
    Cycadophyta: 'Cycads',
    Ginkgophyta: 'Ginkgo',
    Glaucophyta: 'Glaucophytes',
    Gnetophyta: 'Gnetophytes',
    Lycophyta: 'Clubmosses and Spikemosses',
    Anthophyta: 'Flowering plants',
    Hepatophyta: 'Liverworts',
    Coniferophyta: 'Conifers',
    Pteridophyta: 'Ferns and Horsetails',

  }


  { /*search here*/}
  const searchStateByPhylum = async (stateName, phylum) => {
    // Map state name to abbreviation

    const stateAbbreviation = StateAbbreviations[stateName];

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
            recordsPerPage: 4,
          },
          recordSubtypeCriteria: [],
          modifiedSince: null,
          locationOptions: {
            origin: 'onlyNatives',
          },
          classificationOptions: null,
          speciesTaxonomyCriteria: [{
            "paramType": "scientificTaxonomy",
            "level": "PHYLUM",
            "scientificTaxonomy": phylum,
             "kingdom": "Plantae"
          }],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPhylumStates((prevStates) => ({
        ...prevStates,
        [phylum]: data.results,
      }));
      console.log(data.results);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      toast.error('Error fetching data', {
        toastId: customIdError2,
      });
    }
  };

  useEffect(() => {
    phylums.forEach((phylum) => {
      searchStateByPhylum('', phylum);
    });
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      phylums.forEach((phylum) => {
        searchStateByPhylum(searchTerm, phylum);
      });
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
            <AdvancedSearch/>
          </div>


          {/*<MapComponent data={data} width={500} height={300} /> */}

          <div className="block-ex">
            {/*<API Call for Anthocerotophyta /> */}
            {phylums.map((phylum) => (
              <div key={phylum}>
                {phylumStates[phylum]?.length > 0 && (
                  <div>
                    <div className="block-title">{phylumTitle[phylum]}</div>
                    <div id="example-plants-grid">
                      {phylumStates[phylum].map((plant) => (
                        <ExamplePlant key={plant.id} plant={plant} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}



          </div>

        </div>

        <Footer />
        
      </div>
      <ToastContainer />
    </div>

  );
}

export default ExplorePage;
