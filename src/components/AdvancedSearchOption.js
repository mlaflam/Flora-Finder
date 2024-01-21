import React, { useState } from 'react';
import checkIcon from '../icons/check-icon.png';

const AdvancedSearchOption = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="phylum-contatiner">
      <div className="checkbox-container"
        onClick={handleCheckboxClick}>
        <div className={isChecked ? "checkbox-clicked" : "checkbox"}>
          {isChecked && <img className="check-icon" src={checkIcon} alt="Compass Icon" />}
          </div>
      </div>
      <div className="phylum-title">{props.phylum}</div>
    </div>

    
  );
}

export default AdvancedSearchOption;