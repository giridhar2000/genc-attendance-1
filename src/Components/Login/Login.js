import React from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
  
    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    return (
        <div className='body'>
        <Form form={form} name="horizontal_login" onFinish={onFinish}
        className="userform"
        style={{
          width: 450,
        }}
        >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Associate Id" />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Link to={"/home"}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Submit
            </Button>
            </Link>
          )}
        </Form.Item>
      </Form>
        </div>
    )
}

export default Login
