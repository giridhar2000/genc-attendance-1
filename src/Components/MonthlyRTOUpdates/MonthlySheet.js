import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker";
import {
    Button,
    Form,
    Input,
} from 'antd';

function MonthlySheet() {
    const [value, setValue] = useState(new Date());

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
        }}
    >
        <div className='inputs' style={{marginBottom: "2vh"}}>
            <DatePicker multiple value={value} onChange={setValue} />
        </div>

            <Button style={{background: "#000048", color: "#fff", width:"15%"}}>Submit</Button>
            <Button style={{width:"15%", marginLeft: "2vh"}}>Reset</Button>
        </Form>
    )
}

export default MonthlySheet
