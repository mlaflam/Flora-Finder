// ConservationCircle.jsx
import React from 'react';

const ConservationStatusWorld = ({ plantData, rank, title }) => (
  <div className='circle-container'>
    <div className={`circle ${plantData.plant.roundedGRank === rank ? "visible" : "hidden"}`}> {rank}
      <div className={plantData.plant.roundedGRank === rank ? "text-visible" : "text-hidden"}>{title}</div>
    </div>
    <div className={plantData.plant.roundedGRank !== rank ? "bottom-text-visible" : "bottom-text-hidden"}>{title}</div>
  </div>
);

export default ConservationStatusWorld;
