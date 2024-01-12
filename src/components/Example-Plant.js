import { useState, useEffect } from "react";
import '../style.css';
import plantPreview from '../icons/plant-drawing-1.png';
import { Link } from 'react-router-dom';


function ExamplePlant({ plant}) {
  console.log({ plant });

  const [singlePlant, setSinglePlant] = useState(plant);


  return (
    <Link to={{ pathname: `/PlantPage/${plant.scientificName}` }}
      state={{ plant }}
      className='link-to-plant'>
      
      <div className="example-plant">
        <div className="plant-block">
          <a className="plant-preview-link" target="_blank">
            {/*singlePlant ? <img className="plant-preview" src={singlePlant.image_url} alt="Plant Preview" /> : <img className="plant-preview" src={plantPreview} alt="Plant Preview" /> */}
            <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
          </a>
        </div>

        <div className="plant-info">
          <div className="plant-scientific-name" >
            {plant.scientificName}
          </div>

          <div className="plant-common-name">
            {plant.primaryCommonName}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExamplePlant;