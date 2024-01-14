import { useParams, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Classification from '../components/Classification';
import Distributions from '../components/Distributions';
import References from '../components/References';
import Conservation from '../components/Conservation';
import ErrorPage from "./ErrorPage";
import plantPreview from '../icons/plant-drawing-1.png';

const ExamplePlantPage = () => {
  const { scientificName } = useParams();
  const location = useLocation();
  const plantData = location.state;

  const pagelink = '/PlantPage/' + scientificName + '/Classification';

  console.log({ scientificName });
  console.log("plantData");
  console.log(plantData);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // Adjust this value based on how much less you want to scroll
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const navbarHeight = document.querySelector('.header').offsetHeight;
    const sidebar = document.querySelector('.sidebar');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      // Check if screen width is greater than 900px
      if (screenWidth > 900) {
        if (scrollPosition >= navbarHeight) {
          sidebar.style.top = `${navbarHeight + 30}px`;
        } else {
          sidebar.style.top = '0';
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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

              <div className="vl">
                <div
                  className="sidebar-section"
                  onClick={() => scrollToSection('classification-section')}
                >
                  Classification
                </div>
                <div
                  className="sidebar-section"
                  onClick={() => scrollToSection('distributions-section')}
                >
                  Distributions
                </div>
                <div
                  className="sidebar-section"
                  onClick={() => scrollToSection('conservation-section')}
                >
                  Conservation Status
                </div>
                <div
                  className="sidebar-section"
                  onClick={() => scrollToSection('references-section')}
                >
                  References
                </div>
              </div>

            </div>

            <div className='sections-container-outer'>

              <Classification plantData={plantData} id="classification-section" />
              <Distributions plantData={plantData} id="distributions-section" />
              <Conservation plantData={plantData} id="conservation-section" />
              <References plantData={plantData} id="references-section" />


            </div>

          </div>

        </div>


        <Footer />

      </div>
    </div>

  );
}

export default ExamplePlantPage;
