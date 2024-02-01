import React from 'react'
import { useState } from "react";
import AdvancedSearchOption from "../components/AdvancedSearchOption.js";
import arrowIconBefore from '../icons/arrow-icon-2.png';
import arrowIconAfter from '../icons/arrow-icon.png';

const AdvancedSearch = ({ setPhylumCheckedStates, phylumCheckedStates }) => {

  const [isArrowAfter, setIsArrowAfter] = useState(false);

  const handleClick = () => {
    setIsArrowAfter(!isArrowAfter);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxClick = (phylum) => {
    setPhylumCheckedStates((prevStates) => ({
      ...prevStates,
      [phylum]: !prevStates[phylum],
    }));
  };

  const handleClearClick = () => {
    //setSearchTerm('');
    setPhylumCheckedStates((prevStates) => {
      // Reset all phylum checkboxes to false
      const updatedStates = {};
      Object.keys(prevStates).forEach((phylum) => {
        updatedStates[phylum] = false;
      });
      return updatedStates;
    });
  };


  return (
    <div className="advanced-search-container-1">
      <div className="advanced-search-container-2">
        <div className="advanced-search-title-container">
          <img
            className="arrow-icon"
            src={isArrowAfter ? arrowIconAfter : arrowIconBefore}
            alt="Compass Icon"
            onClick={handleClick}
          />
          <div className="advanced-search-title">Advanced Search</div>
        </div>
        {isArrowAfter && (
          <div className="advanced-search-container-inner">
            <div className="advanced-search-container-inner-content">


              <div className="advanced-search-grid-container">
                <div className="advanced-search-grid">
                  <AdvancedSearchOption
                    phylum="Hornworts"
                    isChecked={phylumCheckedStates.Hornworts}
                    onCheckboxClick={() => handleCheckboxClick("Hornworts")}
                  />
                  <AdvancedSearchOption
                    phylum="Mosses"
                    isChecked={phylumCheckedStates.Mosses}
                    onCheckboxClick={() => handleCheckboxClick("Mosses")}
                  />
                  <AdvancedSearchOption
                    phylum="Charophytes"
                    isChecked={phylumCheckedStates.Charophytes}
                    onCheckboxClick={() => handleCheckboxClick("Charophytes")}
                  />
                  <AdvancedSearchOption
                    phylum="Chlorophytes"
                    isChecked={phylumCheckedStates.Chlorophytes}
                    onCheckboxClick={() => handleCheckboxClick("Chlorophytes")}
                  />
                  <AdvancedSearchOption
                    phylum="Cycads"
                    isChecked={phylumCheckedStates.Cycads}
                    onCheckboxClick={() => handleCheckboxClick("Cycads")}
                  />

                  <AdvancedSearchOption
                    phylum="Ginkgo"
                    isChecked={phylumCheckedStates.Ginkgo}
                    onCheckboxClick={() => handleCheckboxClick("Ginkgo")}
                  />

                  <AdvancedSearchOption
                    phylum="Glaucophytes"
                    isChecked={phylumCheckedStates.Glaucophytes}
                    onCheckboxClick={() => handleCheckboxClick("Glaucophytes")}
                  />

                  <AdvancedSearchOption
                    phylum="Gnetophytes"
                    isChecked={phylumCheckedStates.Gnetophytes}
                    onCheckboxClick={() => handleCheckboxClick("Gnetophytes")}
                  />

                  <AdvancedSearchOption
                    phylum="Clubmosses and Spikemosses"
                    isChecked={phylumCheckedStates.Lycophyta}
                    onCheckboxClick={() => handleCheckboxClick("Lycophyta")}
                  />

                  <AdvancedSearchOption
                    phylum="Flowering plants"
                    isChecked={phylumCheckedStates.Anthophyta}
                    onCheckboxClick={() => handleCheckboxClick("Anthophyta")}
                  />
                  <AdvancedSearchOption
                    phylum="Liverworts"
                    isChecked={phylumCheckedStates.Liverworts}
                    onCheckboxClick={() => handleCheckboxClick("Liverworts")}
                  />
                  <AdvancedSearchOption
                    phylum="Conifers"
                    isChecked={phylumCheckedStates.Conifers}
                    onCheckboxClick={() => handleCheckboxClick("Conifers")}
                  />
                  <AdvancedSearchOption
                    phylum="Ferns and Horsetails"
                    isChecked={phylumCheckedStates.Pteridophyta}
                    onCheckboxClick={() => handleCheckboxClick("Pteridophyta")}
                  />
                </div>


              </div>

              <div className="clear-search-container">
                <div className="clear-search"
                  onClick={handleClearClick}>Clear Search</div>
              </div>


            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdvancedSearch