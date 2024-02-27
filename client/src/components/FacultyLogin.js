import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

const FacultyLogin = () => {
    const navigate = useNavigate();
    const [isElectricityOn, setIsElectricityOn] = useState(false);
    const [notification, setNotification] = useState('');

    const handleSubmit = () => {
      if (isElectricityOn) {
        alert("Electricity turned on");
        navigate('/')
      } else {
        alert("Electricity turned off");
        navigate('/')
      }
    };
    
  return (
    <div>
        
        <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center" style={{ 
  backgroundImage: 'url("https://assets.taraenergy.com/wp-content/uploads/2022/11/history-of-electricity-article-image-of-electric-powerlines.jpeg")', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh' // Ensure the section covers the full height of the viewport
}}>
  <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
     
    <form className="p-12 md:p-24">
      <div className="flex items-center text-lg mb-6 md:mb-8">
     
        <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Faculty ID" />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        
      <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Faculty Name" />

      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        
        <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Department" />
  
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
        
        <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Classroom" />
  
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
        
        <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Purpose" />
  
        </div>
        
        <fieldset className="grid grid-cols-2 gap-4">
  <legend className="sr-only">Delivery</legend>

  <div>
    <label
      htmlFor="DeliveryStandard"
      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
    >
      <div>
        <h1 className="text-gray-700">Turn On Electricity</h1>

       
      </div>

      <input 
          type="radio" 
          id="electricityOn" 
          name="electricity" 
          value="on" 
          checked={isElectricityOn} 
          onChange={() => setIsElectricityOn(true)} 
           
        />
    </label>
  </div>

  <div>
    <label
      htmlFor="DeliveryPriority"
      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
    >
      <div>
        <h1 className="text-gray-700">Turn Off Electricity</h1>

      
      </div>

      <input 
          type="radio" 
          id="electricityOff" 
          name="electricity" 
          value="off" 
          checked={!isElectricityOn} 
          onChange={() => setIsElectricityOn(false)} 
        
        />
    </label>
  </div>
</fieldset>
 

<button className="group relative h-12 w-64 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white mt-4" onClick={handleSubmit}>
  SUBMIT
  <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
</button>

    </form>
  </div>
 </div>
 
    </div>
  )
}

export default FacultyLogin
