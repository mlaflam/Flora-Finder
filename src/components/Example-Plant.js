import '../style.css';
import plantPreview from '../icons/plant-drawing-1.png';


function ExamplePlant() {
  return <div className="example-plant">
    <div className="plant-block">
      <a className="plant-preview-link" href="https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium"
        target="_blank">
        <img className="plant-preview" src={plantPreview} alt="Plant Preview" />
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