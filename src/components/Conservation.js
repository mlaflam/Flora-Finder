import React from 'react'
import conservationIcon from '../icons/conservation-icon-4.png';
import conservationStatusIcon from '../icons/conservation-status-icon.png';

const Conservation = ({ plantData, id }) => {
  return (
    <div className='sections-container-inner' id={id}>
      <div className='plant-page-header-container'>
        <img className="plant-page-header-icon" src={conservationIcon} alt="Conservation Icon" />
        <div className='plant-page-header'>Conservation Status</div>
      </div>


      <div className='class-container'>
        <div className='conservation-title'> World Status: </div>
        <div className='conservation-status-container'>

          <div className={`circle ${plantData.plant.gRank === 'GX' ? "visible" : "hidden"}`}> GX
            <div className={plantData.plant.gRank === 'GX' ? "text-visible" : "text-hidden"}>Presumed Extinct</div>
          </div>

          <div className={`circle ${plantData.plant.gRank === 'GH' ? "visible" : "hidden"}`}> GH
            <div className={plantData.plant.gRank === 'GH' ? "text-visible" : "text-hidden"}>Possibly Extinct</div>
          </div>

          <div className={`circle ${plantData.plant.gRank === 'G1' ? "visible" : "hidden"}`}> G1
            <div className={plantData.plant.gRank === 'G1' ? "text-visible" : "text-hidden"}>Critically Imperiled</div>
          </div>
          
          <div className={`circle ${plantData.plant.gRank === 'G2' ? "visible" : "hidden"}`}> G2
            <div className={plantData.plant.gRank === 'G2' ? "text-visible" : "text-hidden"}>Imperiled</div>
          </div>

          <div className={`circle ${plantData.plant.gRank === 'G3' ? "visible" : "hidden"}`}> G3
            <div className={plantData.plant.gRank === 'G3' ? "text-visible" : "text-hidden"}>Vulnerable</div>
          </div>
        
          <div className={`circle ${plantData.plant.gRank === 'G4' ? "visible" : "hidden"}`}> G4
            <div className={plantData.plant.gRank === 'G4' ? "text-visible" : "text-hidden"}>Apparently Secure</div>
          </div>

          <div className={`circle ${plantData.plant.gRank === 'G5' ? "visible" : "hidden"}`}> G5
            <div className={plantData.plant.gRank === 'G5' ? "text-visible" : "text-hidden"}>Secure</div>
          </div>
          
          <div className={`circle ${plantData.plant.gRank === 'GNR' ? "visible" : "hidden"}`}> No Status Rank
          </div>

        </div>

        <div className='conservation-title'> National & State Statuses: </div>

        <div className='class-scien'> United States:
          <div className='class-1 '> {plantData.plant.nations[0].roundedNRank}</div></div>

        <div className='class-scien'> Secure:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Apparently Secure:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Vulnerable:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Vulnerable:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Critically Imperiled:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Possibly Extirpated:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> Presumed Extirpated:
          <div className='class-1 '> states</div></div>

        <div className='class-scien'> No Status Rank:
          <div className='class-1 '> states</div></div>

      </div>


    </div>
  )
}

export default Conservation