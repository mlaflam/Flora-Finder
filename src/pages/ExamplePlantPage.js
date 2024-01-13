import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Classification from '../components/Classification';
import Distributions from '../components/Distributions';
import Conservation from '../components/Conservation';
import ErrorPage from "./ErrorPage";


import plantPreview from '../icons/plant-drawing-1.png';


const ExamplePlantPage = () => {
  const { scientificName } = useParams();
  const location = useLocation();
  const plantData = location.state;

  console.log({ scientificName });
  console.log("plantData");
  console.log(plantData);

  if (!plantData) {
    return <ErrorPage />;
  }


  return (

    <div>

      <div className="plant-block-main">
        <Navbar />

        <div className='plant-page-block'>

          <div id="plant-box-container">
            <div className="plant-title-container">
              <div className="plant-img-block">
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

              <div class="vl">
                <div className='sidebar-section'>Classification</div>
                <div className='sidebar-section'>Distributions</div>
                <div className='sidebar-section'>Conservation Status</div>
                <div className='sidebar-section'>References</div>
              </div>

            </div>

            <div className='sections-container-outer'>

              <Classification plantData={plantData} />

              <Distributions plantData={plantData} />

              <Conservation plantData={plantData} />


            </div>

          </div>

        </div>


        <Footer />

      </div>
    </div>

  );
}

export default ExamplePlantPage;
