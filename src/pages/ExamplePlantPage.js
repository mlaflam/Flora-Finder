import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorPage from "./ErrorPage";

import leafIconThree from '../icons/leaf-icon-3.png';
import plantPreview from '../icons/plant-drawing-1.png';
import globeIcon from '../icons/globe-icon.png';
import conservationIcon from '../icons/conservation-icon-2.png';
import usaMap from '../icons/usa_states_map-scaled.jpeg';
import conservationStatusIcon from '../icons/conservation-status-icon.png';

const ExamplePlantPage = () => {
  const { scientificName } = useParams();
  const location = useLocation();
  const plantData = location.state;

  console.log({ scientificName });
  console.log(plantData);

  const customIdError = "custom-id-no";
  const customIdError2 = "custom-id-no-2";

  if (!plantData) {
    return <ErrorPage />;
  }


  return (

    <div>
      <div className="block-main">
        <Navbar />

        <div className="block">

          <div id="plant-box-container">
            <div className="plant-title-container">
              <div className="plant-page-block">
                  <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
              </div>

              <div className="plant-container">
                <div className="plant-title">{plantData.plant.scientificName}</div>
                <div className="plant-title-2">{plantData.plant.primaryCommonName}</div>
              </div>

            </div>
           
          </div>

          <hr className='divider'></hr>

          <div className='plant-info-container'>

            <div className='sidebar'>
              <div className='sidebar-title'>Contents</div>
              <div>Classification</div>
              <div>Distributions</div>
              <div>Conservation Status</div>

            </div>

            <div className='sections-container-outer'>
              <div className='sections-container-inner'>
                <div className='plant-page-header-container'>
                  <img className="plant-page-header-icon" src={leafIconThree} alt="Leaf Icon" />
                  <div className='plant-page-header'>Classification</div>
                </div>
                {/*<hr className='divider-2'></hr>*/}

                <div className='class-container'>
                  <div className='class-scien'> Scientific Name:
                    <div className='class-1 '> {plantData.plant.scientificName}</div></div>


                  <div className='class-scien'> Other Common Names:
                    <div className='class-1 '> {plantData.plant.speciesGlobal.otherCommonNames}</div></div>


                  <div className='class-k'>Kingdom:
                    <div className='class-2 '> Plantae </div> </div>
                  <div className='class-p'>Phylum:
                    <div className='class-2 '> {plantData.plant.speciesGlobal.phylum} </div> </div>
                  <div className='class-c'>Class:
                    <div className='class-2 '>{plantData.plant.speciesGlobal.taxclass}</div></div>
                  <div className='class-o'>Order:
                    <div className='class-2 '>{plantData.plant.speciesGlobal.taxorder}</div></div>
                  <div className='class-f'>Family:
                    <div className='class-2 '>{plantData.plant.speciesGlobal.family}</div></div>
                  <div className='class-s'> Genus:
                    <div className='class-2 '>{plantData.plant.speciesGlobal.genus}</div></div>


                </div>

               
               
              </div>

              <div className='sections-container-outer'>
                <div className='sections-container-inner'>
                  <div className='plant-page-header-container'>
                    <img className="plant-page-header-icon" src={globeIcon} alt="Globe Icon" />
                    <div className='plant-page-header'>Distributions</div>
                  </div>

                  <div className='class-container'>
                    <div className='map-container'>
                      <img className="map" src={usaMap} alt="map Icon" />
                      </div>
                    

                    </div>
                </div>


              </div>

              
              <div className='sections-container-inner'>
                <div className='plant-page-header-container'>
                  <img className="plant-page-header-icon" src={conservationIcon} alt="Leaf Icon" />
                  <div className='plant-page-header'>Conservation Status</div>  
                </div>

                <div className='class-container'>
                  <div className='conservation-title'> World Status: </div>
                  <img className="conservation-img" src={conservationStatusIcon} alt="Conservation status Icon" />

                  <div className='conservation-title'> National & State Statuses: </div>

                  <div className='class-scien'> United States:
                    <div className='class-1 '> {plantData.plant.nations[0].roundedNRank}</div></div>
                  
                  <div className='class-scien'> Secure:
                    <div className='class-1 '> states</div></div>
                  
                  <div className='class-scien'> Secure:
                    <div className='class-1 '> states</div></div>
                  
                  <div className='class-scien'> Secure:
                    <div className='class-1 '> states</div></div>
                  
                  <div className='class-scien'> Secure:
                    <div className='class-1 '> states</div></div>

                </div>
               
                
              </div>

            </div>

            

          </div>
        

        </div>

          <Footer />
        
      </div>
    </div>
    
  );
}

export default ExamplePlantPage;
