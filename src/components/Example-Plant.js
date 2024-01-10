import '../style.css';
import plantPreview from '../icons/plant-drawing-1.png';


const API_URL = 'https://trefle.io/api/v1/plants?token=JvxIrTqnOcz8LlTtfcvs_lWjddMEcgCfnY0BD1tvKe0&filter[scientific_name]='

function ExamplePlant({ plant }) {

  

  return <div className="example-plant">
    <div className="plant-block">
      <a className="plant-preview-link" target="_blank">
        {/*<img className="plant-preview" src={plantPreview} alt="Plant Preview" /> */}
        <img className="plant-preview" src={plant.Poster !== 'N/A' ? plant.Poster : plantPreview} alt="Plant Preview" />
      </a>
    </div>

    <div className="plant-info">
      <div className="plant-scientfic-name">
        {plant.scientificName}
      </div>

      <div className="plant-common-name">
        Clover
      </div>

    </div>
  </div>
}

export default ExamplePlant;