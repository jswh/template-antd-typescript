import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.less';
import Layout, { Breadcrumbs } from '@/layouts/index'
import SideMenu from '@/layouts/SideMenu'

class Index extends Component {
  topMenu() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    )
  }
  sideMenu() {
    return (<SideMenu></SideMenu>)
  }
  render() {
    return (<Layout breadCrumbs={Breadcrumbs(['首页'])} sideMenu={this.sideMenu} topMenu={this.topMenu}>index page</Layout>);
  }
}

export default Index;