import React from 'react'
import {
    Button,
    Form,
    Radio,
} from 'antd';
import { useState } from 'react';
import "../DailyAttendance/DailyAttendance.css"
import { Select } from 'antd';
import AttendanceForm from '../Form/AttendanceForm';

function DailyAttendance() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
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
            size={"default"}
            style={{
                width: "100%",
                marginTop: '3vh'
            }}
        >
            <div className='inputs'>
                <AttendanceForm />
                <div className='attendance'>
                <Form.Item label="mode:" className='formitem'>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={"Working From Office"}>Office</Radio>
                        <Radio value={"Working From Home"}>WFH</Radio>
                    </Radio.Group>
                    <Select
                        defaultValue="Office Location"
                        style={{
                            width: "25%",
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'CKC',
                                label: 'CKC',
                            },
                            {
                                value: 'TCO',
                                label: 'TCO',
                            },
                            {
                                value: 'MEPZ',
                                label: 'MEPZ',
                            },
                            {
                                value: 'DLF',
                                label: 'DLF',
                            },
                            {
                                value: 'CCC',
                                label: 'CCC',
                            },
                        ]}
                    />
                    </Form.Item>
                </div>
                <Button style={{ background: "#000048", color: "#fff", width: "15%" }}>Submit</Button>
                <Button style={{ width: "15%", marginLeft: "2vh" }}>Reset</Button>

            </div>

        </Form>
        // </div>
    )
}

export default DailyAttendance
