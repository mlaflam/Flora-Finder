import React, { useState } from 'react';
import checkIcon from '../icons/check-icon.png';

const AdvancedSearchOption = (props) => {
  const { phylum, isChecked, onCheckboxClick } = props;

  return (
    <div className="phylum-contatiner">
      <div className="checkbox-container" onClick={onCheckboxClick}>
        <div className={isChecked ? "checkbox-clicked" : "checkbox"}>
          {isChecked && <img className="check-icon" src={checkIcon} alt="Check Icon" />}
        </div>
      </div>
      <div className="phylum-title">{phylum}</div>
    </div>
  );
}

export default AdvancedSearchOption;