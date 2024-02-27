 
import './App.css';
import FacultyLogin from './components/FacultyLogin';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import StudentAccess from './components/StudentAccess';
import StudentTimeTable from './components/StudentTimeTable';
import Header from './components/Header';
import ExamMode from './components/ExamMode';
import DateSelector from './components/DateSelector';
 

export default function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      <Header />
      <div>
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teacher-access" element={<FacultyLogin />} />
          <Route path="/exam-mode" element={<ExamMode /> } />
          <Route path="/student-timetable" element={<StudentTimeTable />} />
           

          


          




        </Routes>
       
      </div>
    </Router>
    </div>
  );
}
