import React from 'react';
import { Button, Divider, Form, Input, message } from 'antd';
import PhraseRegister from './PhraseRegister';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterForm: React.FC = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  const config = {
    rules :[{required: true, message:'Por favor llene el campo' }],
  };
  
  const registernavigate = useNavigate()
  const onFinish = async (fieldsValue: any) => {
      try{
        await axios.post("http://localhost:8081/api/v1/auth/register", fieldsValue)
        alert('Registro exitoso')
        registernavigate("artri/login")
      }catch(err){
        console.error(err)
      }
  }
  return(
  <div>
        <PhraseRegister />
    <Divider />
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item name="nickname" label="Nickname" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="name" label="Nombre" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="lastname" label="Apellido" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="age" label="Edad" {...config}>
      <Input 
      type='number'
      />
    </Form.Item>

    <Form.Item name="email" label="Email" rules={[{type:'email', required : true}] }>
        <Input />
    </Form.Item>

    <Form.Item name="password" label="Contraseña" {...config}>
        <Input 
         type="password"/>
    </Form.Item>

    <Form.Item name="role" label="Rol" {...config}>
        <Input 
         type="number"/>
    </Form.Item>

    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Registrate
      </Button>
    </Form.Item>
  </Form>
  </div>)
};

export default RegisterForm;