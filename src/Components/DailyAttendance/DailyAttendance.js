import React from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Radio,
} from 'antd';
import { useState } from 'react';
import "../DailyAttendance/DailyAttendance.css"

function DailyAttendance() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
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
            //onValuesChange={onFormLayoutChange}
            size={"default"}
            style={{
                width: "100%",
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
                <div className='attendance'>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={"Working From Office"}>Office</Radio>
                        <Radio value={"Working From Home"}>WFH</Radio>
                    </Radio.Group>
                    <Form.Item label="Date" >
                        <DatePicker />
                    </Form.Item>
                </div>
            </div>

                <Button style={{background: "#000048", color: "#fff", width:"15%"}}>Submit</Button>
                <Button style={{width:"15%", marginLeft: "2vh"}}>Reset</Button>
            </Form>
    )
}

export default DailyAttendance
