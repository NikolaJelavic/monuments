import { useState } from 'react';

export default function Filter({ data, selectedState, setSelectedState }) {
  const [selectedOption, setSelectedOption] = useState('yugoslavia');
  const [areButtonsVisible, setAreButtonsVisible] = useState(false); 

  const handleOptionClick = (option) => {
    if (option === 'yugoslavia') {
      setSelectedState(null);
    } else {
      setSelectedState(option);
    }
    
  };


  return (
    <>
      <div
        className='bg-red-400 flex flex-col w-32 rounded text-left'
        onMouseEnter={() => setAreButtonsVisible(true)} 
        onMouseLeave={() => setAreButtonsVisible(false)}
        onClick={() => setAreButtonsVisible((prev) => !prev)} 
      >
        <p className='w-40 bg-gray-400 rounded p-2 text-left'>Filter monuments by state/province ▾</p>
        
        {areButtonsVisible && (
          <div className='text-left pl-1'>
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
          className={selectedOption === 'Bosnia and Hercegovina' ? 'active' : ''}
          onClick={() => handleOptionClick('Bosnia and Hercegovina')}
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
          className={selectedOption === 'Vojvodina' ? 'active' : ''}
          onClick={() => handleOptionClick('Vojvodina')} 
        >
          SAP Vojvodina
        </button>
        <button
          className={selectedOption === 'Kosovo' ? 'active' : ''}
          onClick={() => handleOptionClick('Kosovo')} 
        >
          SAP Kosovo
        </button>
          </div>
        )}
      </div>
    </>
  );
}
