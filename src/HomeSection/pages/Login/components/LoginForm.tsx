import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input } from 'antd';
import Phrase from './Phrase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async(values: any) => {
    try{
      setLoading(true)
      const response = await axios.post("http://localhost:8081/api/v1/auth/authenticate",
      values);
      const token = response.data.token
      localStorage.setItem("token", token);
      navigate("/artri")

    }catch(err){
      console.error()
    } finally{
      setLoading(false)
    }
    
  };



  return (
    <div>
      <Phrase />
      <Divider />
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Por favor ingrese su correo' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor ingrese la contraseña' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-  icon" />}
          type="password"
          placeholder="Contraseña" 
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default LoginForm;