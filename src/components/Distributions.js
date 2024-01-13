import React from 'react'
import usaMap from '../icons/usa_states_map-scaled.jpeg';
import globeIcon from '../icons/globe-icon.png';

const Distributions = ({ plantData }) => {
  return (

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
  )
}

export default Distributions