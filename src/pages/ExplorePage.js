import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import '../darkstyle.css';
import ExamplePlant from '../components/Example-Plant';
import Navbar from '../components/Navbar';
import compassIcon from '../icons/compass-icon-4.png';
import searchIcon from '../icons/search-icon-3.png';
import arrowIconBefore from '../icons/arrow-icon-2.png';
import arrowIconAfter from '../icons/arrow-icon.png';
import xIcon from '../icons/x-button-icon.png';
import Footer from '../components/Footer';
import MapComponent from "../components/MapComponent.js";
import AdvancedSearchOption from "../components/AdvancedSearchOption.js";

const plants_api_url = 'https://explorer.natureserve.org/api/data/speciesSearch';


const customIdError = "custom-id-no";
const customIdError2 = "custom-id-no-2";

function ExplorePage() {

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

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

  const [isArrowAfter, setIsArrowAfter] = useState(false);

  const handleClick = () => {
    setIsArrowAfter(!isArrowAfter);
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

            <div className="advanced-search-container-1">
              <div className="advanced-search-container-2">
                <div className="advanced-search-title-container">
                  <img
                    className="arrow-icon"
                    src={isArrowAfter ? arrowIconAfter : arrowIconBefore}
                    alt="Compass Icon"
                    onClick={handleClick}
                  />
                  <div className="advanced-search-title">Advanced Search</div>
                </div>
                {isArrowAfter && (
                  <div className="advanced-search-container-inner">
                    <div className="advanced-search-container-inner-content">
                      

                      <div className="advanced-container">
                        <div className="advanced-top">
                          <AdvancedSearchOption phylum='Hornworts' />
                          <AdvancedSearchOption phylum='Mosses' />
                          <AdvancedSearchOption phylum='Charophytes' />
                          <AdvancedSearchOption phylum='Chlorophytes' />
                          <AdvancedSearchOption phylum='Cycads' />
                        </div>

                        <div className="advanced-middle">
                          <AdvancedSearchOption phylum='Ginkgo' />
                          <AdvancedSearchOption phylum='Glaucophytes' />
                          <AdvancedSearchOption phylum='Gnetophytes' />
                          <AdvancedSearchOption phylum='Chlorophytes' />
                          <AdvancedSearchOption phylum='Clubmosses and Spikemosses' />
                        </div>

                        <div className="advanced-bottom">
                          <AdvancedSearchOption phylum='Flowering plants' />
                          <AdvancedSearchOption phylum='Liverworts' />
                          <AdvancedSearchOption phylum='Conifers' />
                          <AdvancedSearchOption phylum='Ferns and Horsetails' />
                         
                        </div>


                      </div>

                      <div className="clear-search-container">
                        <div className="clear-search">Clear Search</div>
                      </div>

                     
                    </div>
                  </div>
                )}
              </div>
            </div>

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
