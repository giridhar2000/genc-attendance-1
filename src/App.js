import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import DailyAttendance from './Components/DailyAttendance/DailyAttendance';
import MonthlySheet from './Components/MonthlyRTOUpdates/MonthlySheet';
import AttendanceForm from './Components/Form/AttendanceForm';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <span>Genc Attendance</span>
      </div>
      <Router>
        {sessionStorage.getItem("isLoggedin") ? (
          <div className='authoriseduser'>

            <Home />
            <div className='formbody'>
              <AttendanceForm />
              <Routes>
                <Route exact path='/DailyAttendance' element={<DailyAttendance />}></Route>
                <Route exact path='/RTOUpdates' element={<MonthlySheet />}></Route>

              </Routes>
            </div>
          </div>
        )
          :
          (
            <div className='login'>
              <Routes>
                <Route exact path='/' element={<Login />}></Route>
              </Routes>
            </div>
          )
        }

      </Router>
    </div>
  );
}

export default App;
