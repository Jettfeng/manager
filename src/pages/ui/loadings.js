import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd';
import './ui.less'
export default class Loadings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            size: 'default'
        }
    }

    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size='small' />
                    <Spin style={{ margin: '0 10px' }} />
                    <Spin size='large' />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React" description="欢迎来学习React" type="info" />
                    <Alert message="React" description="欢迎来学习React" type="warning" />
                    <Spin>
                        <Alert message="React" description="欢迎来学习React" type="warning" />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert message="React" description="欢迎来学习React" type="warning" />
                    </Spin>
                    <Spin tip="加载中..." indicator={iconLoading}>
                        <Alert message="React" description="欢迎来学习React" type="warning" />
                    </Spin>
                </Card>
            </div>
        )
    }
}