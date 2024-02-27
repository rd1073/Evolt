import React from 'react';
import { useNavigate} from "react-router-dom";
 



const Home = () => {
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

  return (
    <div>
         <section className="bg-gray-50" style={{ 
  backgroundImage: 'url("https://assets.taraenergy.com/wp-content/uploads/2022/11/history-of-electricity-article-image-of-electric-powerlines.jpeg")', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh' // Ensure the section covers the full height of the viewport
}}>

  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
    <div className="relative">
  <div className="absolute inset-0 bg-white opacity-35 rounded-lg"></div>
  <h1 className="text-3xl font-extrabold sm:text-5xl relative z-10">
    <strong className="font-extrabold text-red-700 sm:block"> E-VOLT </strong>
  </h1>
</div>

      

<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
  <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={handleClickT}>
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Teacher's Access</span>
  </button>
  <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={handleClickS}>
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Exam Mode</span>
  </button>
  <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"  onClick={handleClickTT}>
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Student's Timetable</span>
  </button>
</div>

    </div>
  </div>
</section>
      
    </div>
  )
}

export default Home
