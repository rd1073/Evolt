import React from 'react'
import { useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleClickT = () => {
        // Replace '/destination' with the path you want to navigate to
        navigate('/teacher-access');
      };

      const handleClickS = () => {
        // Replace '/destination' with the path you want to navigate to
        navigate('/exam-mode');
      };

      const handleClickTT = () => {
        // Replace '/destination' with the path you want to navigate to
        navigate('/student-timetable');
      };

      const handleClick = () => {
        // Replace '/destination' with the path you want to navigate to
        navigate('/');
      };



  return (
    <div>
     

 

    
     

 
    
     <header className="bg-gray-50">
  <div className="mx-auto max-w-screen-md px-2 py-4 sm:px-4 sm:py-6 lg:px-6">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-lg font-semibold text-gray-900 sm:text-xl" onClick={handleClick}>E-Volt</h1>
      </div>

      <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">

        <button
          className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-xs font-medium" onClick={handleClickT}>Teacher's Access</span>
           
        </button>

        <button
          className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-xs font-medium" onClick={handleClickS}>Exam Mode</span>
           
        </button>
        <button
          className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-xs font-medium" onClick={handleClickTT}>Student's Timetable</span>
           
        </button>

       
      </div>
    </div>
  </div>
</header>



</div>
  )
}

export default Header
