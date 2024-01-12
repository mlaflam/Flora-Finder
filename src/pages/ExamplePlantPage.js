import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorPage from "./ErrorPage";

import leafIconThree from '../icons/leaf-icon-3.png';

const ExamplePlantPage = () => {
  const { scientificName } = useParams();
  const location = useLocation();
  const plantData = location.state;

  console.log({ scientificName });
  console.log(plantData);
  console.log('hee')

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

          <div id="search-box-container">
            <div className="explore-container">
                <img className="explore-icon" src={leafIconThree} alt="Leaf Icon" />
                <div className="explore-title">{plantData.plant.scientificName}</div>
            </div>

            <div className="plant-page-info">
              {plantData.plant.primaryCommonName}
              
            </div>
            
          </div>

          <div>
            <div className='plant-section'>Classification</div>
            <div className='classification'>Kingdom: Plantae</div>
            <div className='classification'>Phylum: {plantData.plant.speciesGlobal.phylum}</div>
            <div className='classification'>Class: {plantData.plant.speciesGlobal.taxclass}</div>
            <div className='classification'>Order: {plantData.plant.speciesGlobal.taxorder}</div>
            <div className='classification'>Family: {plantData.plant.speciesGlobal.family}</div>
            <div className='classification'> Genus: {plantData.plant.speciesGlobal.genus}</div>

            
          </div>

        </div>

          <Footer />
        
      </div>
    </div>
    
  );
}

export default ExamplePlantPage;
