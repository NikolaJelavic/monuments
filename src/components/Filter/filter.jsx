import React, { useState } from 'react';

export default function Filter({ data, selectedState, setSelectedState }) {
  const [selectedOption, setSelectedOption] = useState('yugoslavia');

  const handleOptionClick = (option) => {
    if (option === 'yugoslavia') {
      setSelectedState(null); 
    } else {
      setSelectedState(option);
    }
    setSelectedOption(option);
  };

  const filterMonuments = (monuments) => {
    console.log("Selected State:", selectedState);

    if (!selectedState) return monuments;

    return monuments.filter((monument) => {
      // Use case-insensitive comparison by converting both values to lowercase
      const monumentState = monument.state ? monument.state.toLowerCase() : '';
      const selectedStateLower = selectedState.toLowerCase();

      if (monumentState === selectedStateLower) return true;

      // Check if the monument's province matches the selected state
      const monumentProvince = monument.province ? monument.province.toLowerCase() : '';
      if (monumentProvince === selectedStateLower) return true;

      return false;
    });
  };

  // Apply filtering logic to the monuments
  const filteredMonuments = filterMonuments(data);

  console.log("Filtered Monuments:", filteredMonuments);

  return (
    <>
      <div className='bg-red-400 flex flex-col w-24 rounded'>
        <p className='w-40 bg-gray-400 rounded p-2'>Filter monuments by state or province</p>
        <button
          className={selectedOption === 'yugoslavia' ? 'active' : ''}
          onClick={() => handleOptionClick('yugoslavia')}
        >
          Yugoslavia
        </button>
        <button
          className={selectedOption === 'Serbia' ? 'active' : ''}
          onClick={() => handleOptionClick('Serbia')}
        >
          Serbia
        </button>
        <button
          className={selectedOption === 'Croatia' ? 'active' : ''}
          onClick={() => handleOptionClick('Croatia')}
        >
          Croatia
        </button>
        <button
          className={selectedOption === 'Bosnia' ? 'active' : ''}
          onClick={() => handleOptionClick('Bosnia')}
        >
          B&H
        </button>
        <button
          className={selectedOption === 'Slovenia' ? 'active' : ''}
          onClick={() => handleOptionClick('Slovenia')}
        >
          Slovenia
        </button>
        <button
          className={selectedOption === 'Macedonia' ? 'active' : ''}
          onClick={() => handleOptionClick('Macedonia')}
        >
          Macedonia
        </button>
        <button
          className={selectedOption === 'Montenegro' ? 'active' : ''}
          onClick={() => handleOptionClick('Montenegro')}
        >
          Montenegro
        </button>
        <button
          className={selectedOption === 'vojvodina' ? 'active' : ''}
          onClick={() => handleOptionClick('vojvodina')} // Updated to lowercase 'vojvodina'
        >
          Vojvodina
        </button>
        <button
          className={selectedOption === 'kosovo' ? 'active' : ''}
          onClick={() => handleOptionClick('kosovo')} // Updated to lowercase 'kosovo'
        >
          Kosovo
        </button>
      </div>
    </>
  );
}
