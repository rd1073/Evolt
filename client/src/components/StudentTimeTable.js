import React, { useState } from 'react';
import t1 from '../images/t1.png';
import t2 from '../images/t2.png';
import t3 from '../images/t3.png';





// Component to display a picture
const PictureComponent = ({ imageUrl }) => (
    <div className="bg-gray-200 p-4 rounded-md shadow">
      <img src={imageUrl} alt="Picture" className="w-full h-auto" />
    </div>
  );
  

const StudentTimeTable =()=> {
  const [activeButton, setActiveButton] = useState('T1'); // Initial active button

  const handleButtonClick = (section) => {
    setActiveButton(section);
  };

  // Define image URLs for each section
  const imageUrls = {
    T1: t1,
    T2: t2,
    T3: t3,
  };

  return (
    <div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative ${
            activeButton === 'T1' && 'bg-gray-200' // Highlight active button
          }`}
          onClick={() => handleButtonClick('T1')}
        >
          Section T1
        </button>

        <button
          className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative ${
            activeButton === 'T2' && 'bg-gray-200' // Highlight active button
          }`}
          onClick={() => handleButtonClick('T2')}
        >
          Section T2
        </button>

        <button
          className={`inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative ${
            activeButton === 'T3' && 'bg-gray-200' // Highlight active button
          }`}
          onClick={() => handleButtonClick('T3')}
        >
          Section T3
        </button>
      </span>

      {/* Render picture component based on active button */}
      {activeButton && <PictureComponent imageUrl={imageUrls[activeButton]} />}
    </div>
  );
}


export default StudentTimeTable