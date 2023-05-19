import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {

  return (
    <div className="App">
      <div className='navBar'>
        <span>Genc Attendance</span>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
