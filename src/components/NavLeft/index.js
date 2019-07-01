import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}