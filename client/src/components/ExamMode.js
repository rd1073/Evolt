import React, { useState } from 'react';
import DateSelector from './DateSelector';
import { useNavigate} from "react-router-dom";

const ExamMode = () => {
    const [electricityOn, setElectricityOn] = useState(false);

    const navigate = useNavigate();

  const handleElectricityToggle = () => {
    setElectricityOn(!electricityOn);
  };

  const handleSubmit = () => {
    alert(`Electricity is turned ${electricityOn ? 'on' : 'off'}`);
    navigate('/')

  };
     
    return (
      <div className="container mx-auto py-8">
      <DateSelector />


      <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Room Booking</h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((room) => (
          <div key={room} className="border p-4">
            <h2 className="text-xl font-bold mb-2">Room {room}</h2>
            <div className="flex flex-col mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">AN (1:30 - 5:15)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">FN (9:30 - 1:15)</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Electricity</h2>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={electricityOn}
            onChange={handleElectricityToggle}
          />
          <span className="ml-2">Electricity {electricityOn ? 'On' : 'Off'}</span>
        </label>
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
      </div>
  )
}

export default ExamMode
