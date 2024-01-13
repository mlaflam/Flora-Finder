// ConservationCircle.jsx
import React from 'react';

const ConservationStatusWorld = ({ plantData, rank, title }) => (
  <div className='circle-container'>
    <div className={`circle ${plantData.plant.gRank === rank ? "visible" : "hidden"}`}> {rank}
      <div className={plantData.plant.gRank === rank ? "text-visible" : "text-hidden"}>{title}</div>
    </div>
    <div className={plantData.plant.gRank !== rank ? "bottom-text-visible" : "bottom-text-hidden"}>{title}</div>
  </div>
);

export default ConservationStatusWorld;
