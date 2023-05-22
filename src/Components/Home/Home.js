import React from 'react'
import { Tabs } from 'antd';
import "../Home/Home.css"
import DailyAttendance from '../DailyAttendance/DailyAttendance';

function Home() {
    const onChange = (key) => {
        console.log(key);
      };
    const items = [
        {
          key: '1',
          label: `Daily Attendance`,
          children: <DailyAttendance />,
        },
        {
          key: '2',
          label: `Monthly RTO Updates`,
          children: `Content of Tab Pane 2`,
        },
      ];
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default Home
