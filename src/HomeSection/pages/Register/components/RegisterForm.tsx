import React from 'react';
import { Button, DatePicker, Divider, Form, Input, TimePicker } from 'antd';
import PhraseRegister from './PhraseRegister';

const { RangePicker } = DatePicker;

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
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

const rangeConfig = {
  rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
};

const onFinish = (fieldsValue: any) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
  };
  console.log('Received values of form: ', values);
};

const RegisterForm: React.FC = () => (
    <div>
        <PhraseRegister />
    <Divider />
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item name="username" label="Nickname" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="name" label="Nombre" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="lastname" label="Apellido" {...config}>
        <Input />
    </Form.Item>

    <Form.Item name="username" label="Nickname" {...config}>
        <Input />
    </Form.Item>

    
    <Form.Item name="date-picker" label="Fecha de Nacimiento" {...config}>
      <DatePicker />
    </Form.Item>

    <Form.Item name="email" label="Email" rules={[{type:'email', required : true}] }>
        <Input />
    </Form.Item>

    <Form.Item name="password" label="Contraseña" {...config}>
        <Input 
         type="password"/>
    </Form.Item>

    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Registrate
      </Button>
    </Form.Item>
  </Form>
  </div>
);

export default RegisterForm;