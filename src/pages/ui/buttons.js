import React, { Component } from 'react'
import { Card, Button } from 'antd';
import './index.less'
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading>确定</Button>
                    <Button type="primary" shape="circle" loading></Button>
                    <Button loading>点击加载</Button>
                    <Button shape="circle" loading></Button>
                    <Button type="primary" loading onClick={this.handleCloseLoding}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button type="primary">Imooc</Button>
                </Card>
            </div>
        )
    }
}