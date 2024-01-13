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
        <img className="conservation-img" src={conservationStatusIcon} alt="Conservation status Icon" />

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