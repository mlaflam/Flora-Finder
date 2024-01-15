import React from 'react'
import usaMap from '../icons/usa_states_map-scaled.jpeg';
import bookIcon from '../icons/book-icon.png';


const Referneces = ({ plantData, id }) => {

  const noTaxComments = 'There are no taxonomic comments for ' + plantData.plant.scientificName + ".";
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className='references-container' id={id}>
      <div className='plant-page-header-container'>
        <img className="plant-page-header-icon-2" src={bookIcon} alt="Book Icon" />
        <div className='plant-page-header'>References</div>
      </div>

      <div className='class-container'>
        <div className='api-references-container'>
          <div className='references-title'>API Reference</div>
          NatureServe. [2024]. NatureServe Network Biodiversity Location Data. NatureServe, Arlington, Virginia. NatureServe. 2024. 
        </div>

        <div className='tax-references-container'>
          <div className='references-title'>Taxonomic Comments</div>
          {plantData.plant.speciesGlobal.taxonomicComments
            ? stripHtmlTags(plantData.plant.speciesGlobal.taxonomicComments)
            : noTaxComments}
        </div>


      </div>
    </div>
  )
}

export default Referneces