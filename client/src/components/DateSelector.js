import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date selection
  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected date:", selectedDate);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Select a Date</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            type="date"
            className="border rounded p-2"
            onChange={handleDateSelect}
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      
      {/* Display selected date */}
      {selectedDate && (
        <div className="mt-4">
          <p className="text-lg">Selected Date: {selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default DateSelector;
