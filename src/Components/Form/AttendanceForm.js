import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    Input,
} from 'antd';
import axios from "axios"

function AttendanceForm() {
    const [data, setData] = useState([])
    useEffect(()=>{
        
        // axios
        // .get("http://localhost:8080/attendance/",)
        // .then(data => console.log(data.data))
        // .catch(error => console.log(error));
        setData(sessionStorage.getItem("userData"))
        console.log(sessionStorage.getItem("userData"))
        setTimeout(()=>{
            console.log(data)
        }, 100)
    },[data])
    return (
        <Form
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 14,
        }}
        layout="horizontal"
        initialValues={{
            size: "default",
        }}
        size={"default"}
        style={{
            width: "100%",
            marginTop: '3vh'
        }}
    >
        <div className='inputs'>
            <Form.Item label="Associate Id">
                <Input />
            </Form.Item>

            <Form.Item label="Associate Name">
                <Input />
            </Form.Item>
            <Form.Item label="Project Id">
                <Input />
            </Form.Item>
            <Form.Item label="Project Name">
                <Input />
            </Form.Item>
            <Form.Item label="Project Location">
                <Input />
            </Form.Item>
        </div>

          </Form>
    )
}

export default AttendanceForm
