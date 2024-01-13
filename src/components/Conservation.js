import React from 'react'
import conservationIcon from '../icons/conservation-icon-4.png';
import ConservationStatus from './ConservationStatus';
import ConservationStatusWorld from './ConservationStatusWorld';

const Conservation = ({ plantData, id }) => {

  const getStatusTitle = (roundedSRank) => {
    const statusTitles = {
      'NX': 'Presumed Extinct',
      'NH': 'Possibly Extinct',
      'N1': 'Critically Imperiled',
      'N2': 'Imperiled',
      'N3': 'Vulnerable',
      'N4': 'Apparently Secure',
      'N5': 'Secure',
      'NNR': 'No Status Rank',
    };

    return statusTitles[roundedSRank] || 'Unknown Status';
  };

  return (
    <div className='sections-container-inner' id={id}>
      <div className='plant-page-header-container'>
        <img className="plant-page-header-icon" src={conservationIcon} alt="Conservation Icon" />
        <div className='plant-page-header'>Conservation Status</div>
      </div>


      <div className='class-container'>
        <div className='conservation-title'> World Status: </div>
        <div className='conservation-status-container'>

          <ConservationStatusWorld plantData={plantData} rank="GX" title="Presumed Extinct" />
          <ConservationStatusWorld plantData={plantData} rank="GH" title="Possibly Extinct" />
          <ConservationStatusWorld plantData={plantData} rank="G1" title="Critically Imperiled" />
          <ConservationStatusWorld plantData={plantData} rank="G2" title="Imperiled" />
          <ConservationStatusWorld plantData={plantData} rank="G3" title="Vulnerable" />
          <ConservationStatusWorld plantData={plantData} rank="G4" title="Apparently Secure" />
          <ConservationStatusWorld plantData={plantData} rank="G5" title="Secure" />
          
          <div className={`circle ${plantData.plant.gRank !== 'GX' && plantData.plant.gRank !== 'GH' &&
            plantData.plant.gRank !== 'G1' && plantData.plant.gRank !== 'G2' && plantData.plant.gRank !== 'G3' &&
            plantData.plant.gRank !== 'G4' && plantData.plant.gRank !== 'G5' ? "visible" : "hidden"}`}>
            No Status Rank
          </div>

        </div>

        <div className='conservation-title'> National & State Statuses: </div>

        
        <div className='conservation-title-2'> United States:
          <div className='conservation-subtitle'> {plantData.plant.nations[0].roundedNRank}</div></div>

        <div className="vl-2">

          <ConservationStatus plantData={plantData} roundedSRank='SX' />

          <ConservationStatus plantData={plantData} roundedSRank='SH' />
        
          <ConservationStatus plantData={plantData} roundedSRank='S1' />

          <ConservationStatus plantData={plantData} roundedSRank='S2' />

          <ConservationStatus plantData={plantData} roundedSRank='S3' />

          <ConservationStatus plantData={plantData} roundedSRank='S4' />

          <ConservationStatus plantData={plantData} roundedSRank='S5' />

          <ConservationStatus plantData={plantData} roundedSRank='SNA' />
        
        </div>

      </div>


    </div>
  )
}

export default Conservation