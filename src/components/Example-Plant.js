import { useState, useEffect } from "react";
import '../style.css';
import plantPreview from '../icons/plant-drawing-1.png';

function ExamplePlant({ plant }) {
  console.log(plant);

  const [singlePlant, setSinglePlant] = useState(plant);

  const getPlant = async (scientificName) => {
    console.log(scientificName)
    try {
      const response = await fetch(`https://trefle.io/api/v1/plants?token=JvxIrTqnOcz8LlTtfcvs_lWjddMEcgCfnY0BD1tvKe0&filter[scientific_name]=${scientificName}`, { mode: 'no-cors' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        setSinglePlant(data[0]);
      } else {
        setSinglePlant({ scientificName: scientificName, image_url: plantPreview });
      }
      return data[0]; // You might want to extract specific information from the data
    } catch (error) {
      console.error('Error fetching plant details:', error.message);
      setSinglePlant({ scientificName: scientificName, image_url: plantPreview });
      return null; // Handle error gracefully
    }
  };

  useEffect(() => {
    getPlant(plant.scientificName);
  }, [plant.scientificName]); // `plant.scientificName` is a dependency

  return (
    <div className="example-plant">
      <div className="plant-block">
        <a className="plant-preview-link" target="_blank">
          {singlePlant ? <img className="plant-preview" src={singlePlant.image_url} alt="Plant Preview" /> : <img className="plant-preview" src={plantPreview} alt="Plant Preview" />}
        </a>
      </div>

      <div className="plant-info">
        <div className="plant-scientfic-name">
          {plant.scientificName}
        </div>

        <div className="plant-common-name">
          {plant.primaryCommonName}
        </div>
      </div>
    </div>
  );
}

export default ExamplePlant;