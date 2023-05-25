import React from 'react'
import {
    Button,
    Form,
    Input,
} from 'antd';

function AttendanceForm() {
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
