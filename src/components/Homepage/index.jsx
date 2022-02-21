import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  AccountBookOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import './index.scss';
import {
  Link,
  Route, Switch, useHistory, useRouteMatch,
} from 'react-router-dom';
import Home from '../Home';
import CreateOrder from '../CreateOrder/CreateOrder';

const {
  Header, Content, Sider,
} = Layout;

const { SubMenu } = Menu;

function Homepage() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [selectKeys, setSelectKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  // set sidebar highlight
  useEffect(() => {
    if (history.location.pathname) {
      if (history.location.pathname.includes('home')) {
        setSelectKeys(['1']);
      } else if (history.location.pathname.includes('create')) {
        setSelectKeys(['4']);
      }
    }
  }, [history.location]);

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  const generateBreadcrumb = () => {
    const breadCrumbList = [];
    if (history?.location?.pathname.includes('order')) {
      breadCrumbList.push('首页');
    }
    if (history?.location?.pathname.includes('create')) {
      breadCrumbList.push('商品');
      breadCrumbList.push('创建商品');
    }
    return (
      <Breadcrumb className="breadcrumb">
        {breadCrumbList.includes('首页') && (
        <Breadcrumb.Item className="breadcrumb-child">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link to={`${url}/home`}>首页</Link>
        </Breadcrumb.Item>
        )}
        {breadCrumbList.includes('商品') && (
        <Breadcrumb.Item className="breadcrumb-child">
          商品
        </Breadcrumb.Item>
        )}
        {breadCrumbList.includes('创建商品') && (
        <Breadcrumb.Item className="breadcrumb-child">
          创建商品
        </Breadcrumb.Item>
        )}
      </Breadcrumb>
    );
  };
  return (
    <Layout className="layout">
      <Sider
        breakpoint="lg"
        className="sider"
        collapsible
        collapsed={collapsed}
        trigger={null}
      >
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="logo" onClick={() => history.push(`${url}/home`)}>
          <AccountBookOutlined className="icon" />
        </div>
        <Menu mode="inline" theme="dark" selectedKeys={selectKeys}>
          <Menu.Item key="1" onClick={() => history.push(`${url}/home`)} icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="2" title="商品" icon={<ShoppingOutlined />}>
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>商品列表</Menu.Item>
            <Menu.Item key="4" icon={<AppstoreAddOutlined />} onClick={() => history.push(`${url}/create`)}>添加商品</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggleSideBar} />
            : <MenuFoldOutlined className="trigger" onClick={toggleSideBar} />}
          {generateBreadcrumb()}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, textAlign: 'center' }}>
            <Switch>
              <Route path={`${path}/home`}>
                <Home />
              </Route>
              <Route path={`${path}/create`}>
                <CreateOrder />
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Homepage;
