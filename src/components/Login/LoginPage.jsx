import React, { useState } from 'react';
import {
  Button, Card, Form, Input, notification,
} from 'antd';
import { AccountBookOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.scss';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import router from '../../utilities/router';

function LoginPage() {
  const history = useHistory();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validateInput = () => {
    if (userName !== 'admin' || password !== 'iamadmin') {
      notification.error({ message: 'Login Failed', description: "username and password doesn't match" });
    } else {
      localStorage.setItem('order-token', dayjs().format('YYYY-MM-DD'));
      history.push(router.homepageRoute);
    }
  };
  return (
    <div className="login-container">
      <Card className="card">
        <AccountBookOutlined className="icon" />
        <div className="header">订单系统</div>
        <Form autoComplete="off">
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
            name="username"
          >
            <Input
              placeholder="用户名"
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
                message: '请输入密码!',
              },
            ]}
            name="password"
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              value={password}
              placeholder="密码"
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
