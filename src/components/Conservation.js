import React from 'react'
import conservationIcon from '../icons/conservation-icon-4.png';
import ConservationStatus from './ConservationStatus';

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

          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'GX' ? "visible" : "hidden"}`}> GX
              <div className={plantData.plant.gRank === 'GX' ? "text-visible" : "text-hidden"}>Presumed Extinct</div>
            </div>
            <div className={plantData.plant.gRank !== 'GX' ? "bottom-text-visible" : "bottom-text-hidden"}>Presumed Extinct</div>
          </div>

          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'GH' ? "visible" : "hidden"}`}> GH
              <div className={plantData.plant.gRank === 'GH' ? "text-visible" : "text-hidden"}>Possibly Extinct</div>
            </div>
            <div className={plantData.plant.gRank !== 'GH' ? "bottom-text-visible" : "bottom-text-hidden"}>Possibly Extinct</div>
          </div>
          
          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'G1' ? "visible" : "hidden"}`}> G1
              <div className={plantData.plant.gRank === 'G1' ? "text-visible" : "text-hidden"}>Critically Imperiled</div>
            </div>
            <div className={plantData.plant.gRank !== 'G1' ? "bottom-text-visible" : "bottom-text-hidden"}>Critically Imperiled</div>
          </div>

         
          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'G2' ? "visible" : "hidden"}`}> G2
              <div className={plantData.plant.gRank === 'G2' ? "text-visible" : "text-hidden"}>Imperiled</div>
            </div>
            <div className={plantData.plant.gRank !== 'G2' ? "bottom-text-visible" : "bottom-text-hidden"}>Imperiled</div>
          </div>

          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'G3' ? "visible" : "hidden"}`}> G3
              <div className={plantData.plant.gRank === 'G3' ? "text-visible" : "text-hidden"}>Vulnerable</div>
            </div>
            <div className={plantData.plant.gRank !== 'G3' ? "bottom-text-visible" : "bottom-text-hidden"}>Vulnerable</div>
          </div>
          

          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'G4' ? "visible" : "hidden"}`}> G4
              <div className={plantData.plant.gRank === 'G4' ? "text-visible" : "text-hidden"}>Apparently Secure</div>
            </div>
            <div className={plantData.plant.gRank !== 'G4' ? "bottom-text-visible" : "bottom-text-hidden"}>Apparently Secure</div>
          </div>

          <div className='circle-container'>
            <div className={`circle ${plantData.plant.gRank === 'G5' ? "visible" : "hidden"}`}> G5
              <div className={plantData.plant.gRank === 'G5' ? "text-visible" : "text-hidden"}>Secure</div>
            </div>
            <div className={plantData.plant.gRank !== 'G5' ? "bottom-text-visible" : "bottom-text-hidden"}>Secure</div>
          </div>
          
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