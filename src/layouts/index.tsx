import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Sider } = Layout;
type Props = {
  topMenu?: () => any
  sideMenu?: () => any
  breadCrumbs?: any
}
type States = {}
export default class App extends Component<Props, States> {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <div className="logo" />
          {this.props.topMenu ? this.props.topMenu() : <span />}
        </Header>
        <Layout>
          {this.props.sideMenu ?
            (<Sider width={200} className="site-layout-background">
              {this.props.sideMenu()}
            </Sider>) : <span />}
          <Layout style={{ padding: '0 24px 24px' }}>
            {this.props.breadCrumbs}
            {this.props.children}
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export function Breadcrumbs(crumbs: string[]) {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {crumbs.map((value) => {
        return (<Breadcrumb.Item>{value}</Breadcrumb.Item>)
      })}
    </Breadcrumb>
  )
}