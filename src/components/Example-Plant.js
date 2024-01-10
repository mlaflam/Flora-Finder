import '../style.css';
import plantPreview from '../icons/plant-drawing-1.png';


function ExamplePlant({ movie }) {
  return <div className="example-plant">
    <div className="plant-block">
      <a className="plant-preview-link" target="_blank">
        {/*<img className="plant-preview" src={plantPreview} alt="Plant Preview" /> */}
        <img className="plant-preview"  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      </a>
    </div>

    <div className="plant-info">
      <div className="plant-scientfic-name">
        Trifolium bilineatum
      </div>

      <div className="plant-common-name">
        Clover
      </div>

    </div>
  </div>
}

export default ExamplePlant;