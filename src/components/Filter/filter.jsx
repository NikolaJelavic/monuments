import React, { useState } from 'react';

export default function Filter({ data, selectedState, setSelectedState }) {
  const [selectedOption, setSelectedOption] = useState('yugoslavia');
  const [areButtonsVisible, setAreButtonsVisible] = useState(false); // State to manage button visibility

  const handleOptionClick = (option) => {
    if (option === 'yugoslavia') {
      setSelectedState(null);
    } else {
      setSelectedState(option);
    }
    setSelectedOption(option);
  };

  const filterMonuments = (monuments) => {
    // console.log('Selected State:', selectedState);

    if (!selectedState) return monuments;

    return monuments.filter((monument) => {
      // Use case-insensitive comparison by converting both values to lowercase
      const monumentState = monument.state ? monument.state : '';
      const selectedStateLower = selectedState;

      if (monumentState === selectedStateLower) return true;

      // Check if the monument's province matches the selected state
      const monumentProvince = monument.province ? monument.province : '';
      if (monumentProvince === selectedStateLower) return true;

      return false;
    });
  };

  // Apply filtering logic to the monuments
  const filteredMonuments = filterMonuments(data);

  // console.log('Filtered Monuments:', filteredMonuments);

  return (
    <>
      <div
        className='bg-red-400 flex flex-col w-28 rounded'
        onMouseEnter={() => setAreButtonsVisible(true)} // Show buttons on hover
        onMouseLeave={() => setAreButtonsVisible(false)} // Hide buttons when not hovering
        onClick={() => setAreButtonsVisible((prev) => !prev)} // Toggle buttons on click
      >
        <p className='w-40 bg-gray-400 rounded p-2'>Filter monuments by state/province ▾</p>
        {/* Buttons are visible only when 'areButtonsVisible' is true */}
        {areButtonsVisible && (
          <>
                <button
          className={selectedOption === 'yugoslavia' ? 'active' : ''}
          onClick={() => handleOptionClick('yugoslavia')}
        >
          SFR Yugoslavia
        </button>
        <button
          className={selectedOption === 'Serbia' ? 'active' : ''}
          onClick={() => handleOptionClick('Serbia')}
        >
          SR Serbia
        </button>
        <button
          className={selectedOption === 'Croatia' ? 'active' : ''}
          onClick={() => handleOptionClick('Croatia')}
        >
          SR Croatia
        </button>
        <button
          className={selectedOption === 'Bosnia' ? 'active' : ''}
          onClick={() => handleOptionClick('Bosnia')}
        >
          SR B&H
        </button>
        <button
          className={selectedOption === 'Slovenia' ? 'active' : ''}
          onClick={() => handleOptionClick('Slovenia')}
        >
          SR Slovenia
        </button>
        <button
          className={selectedOption === 'Macedonia' ? 'active' : ''}
          onClick={() => handleOptionClick('Macedonia')}
        >
          SR Macedonia
        </button>
        <button
          className={selectedOption === 'Montenegro' ? 'active' : ''}
          onClick={() => handleOptionClick('Montenegro')}
        >
          SR Montenegro
        </button>
        <button
          className={selectedOption === 'vojvodina' ? 'active' : ''}
          onClick={() => handleOptionClick('vojvodina')} // Updated to lowercase 'vojvodina'
        >
          SAP Vojvodina
        </button>
        <button
          className={selectedOption === 'kosovo' ? 'active' : ''}
          onClick={() => handleOptionClick('kosovo')} // Updated to lowercase 'kosovo'
        >
          SAP Kosovo
        </button>
          </>
        )}
      </div>
    </>
  );
}
