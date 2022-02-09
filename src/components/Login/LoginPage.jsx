import React, { useState } from 'react';
import {
  Button, Card, Form, Input, notification,
} from 'antd';
import { AccountBookOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.scss';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

function LoginPage() {
  const history = useHistory();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validateInput = () => {
    if (userName !== 'admin' || password !== 'iamadmin') {
      notification.error({ message: 'Login Failed', description: "username and password doesn't match" });
    } else {
      localStorage.setItem('order-token', dayjs().format('YYYY-MM-DD'));
      history.push('homepage');
    }
  };
  return (
    <div className="login-container">
      <Card className="card">
        <AccountBookOutlined className="icon" />
        <div className="header">Order System Login</div>
        <Form autoComplete="off">
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            name="username"
          >
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="input-icon" />}
              className="input"
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            name="password"
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              value={password}
              placeholder="Input password"
              className="input"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => validateInput()}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
