import React from 'react'
import { Button } from 'antd';
import "../Home/Home.css"
import DailyAttendance from '../DailyAttendance/DailyAttendance';
import MonthlySheet from '../MonthlyRTOUpdates/MonthlySheet';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear()
    window.location.reload()
    setTimeout(()=>{
      navigate("/")
    }, 500)
  }

  return (
    <div className='verticalNavbar'>
      <div className='navItems'>
        <NavLink activeclassname="active" to={"/DailyAttendance"}>Daily Attendance</NavLink>
      </div>
      <div className='navItems'>
        <NavLink activeclassname="active" to={"/RTOUpdates"}>Monthly RTO updates</NavLink>
      </div>
      <div className='navItems'>
        <NavLink activeclassname="active" to={"/admin"}>Admin</NavLink>
      </div>
      <div className='navItems'>
        <NavLink activeclassname="active" to={"/Report"}>Report</NavLink>
      </div>
      <div className='footer'>
        <Button onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Home
