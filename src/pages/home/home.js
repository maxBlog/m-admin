import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Logo } from 'components'
import './style.styl'

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Layout className="layout-container">
                <Sider
                    className="sider-container"
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Logo>
                        <Icon type="chrome" style={{color: 'white'}} />
                        <Icon type="apple" style={{color: 'white'}} />
                        <Icon type="ie" style={{color: 'white'}} />
                        <Icon type="android" style={{color: 'white'}} />
                    </Logo>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="0">
                            <Icon type="plus" />
                            <span className="nav-create">添加文章</span>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Icon type="book" />
                            <span className="nav-category">管理文章</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="setting" />
                            <span className="nav-setting">设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="layout-content">
                    <Header className="header-content">
                        <Icon
                            className="icon-collapsed"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="content-container">
                    </Content>
                    <Footer className="footer-content">
                        浙ICP备18051512
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
