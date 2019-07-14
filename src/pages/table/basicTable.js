import React from 'react';
import { Card, Table, Modal, Button, message } from 'antd'
import axios from 'axios'
export default class BasicTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    id: '0',
                    userName: 'Jack',
                    sex: '1',
                    state: '1',
                    interest: '1',
                    birthday: '2000-01-01',
                    address: '北京市海淀区奥林匹克公园',
                    time: '09:00',
                    key: 0
                },
                {
                    id: '1',
                    userName: 'Tom',
                    sex: '1',
                    state: '1',
                    interest: '1',
                    birthday: '2000-01-01',
                    address: '北京市海淀区奥林匹克公园',
                    time: '09:00',
                    key: 1
                },
                {
                    id: '2',
                    userName: 'Lily',
                    sex: '1',
                    state: '1',
                    interest: '1',
                    birthday: '2000-01-01',
                    address: '北京市海淀区奥林匹克公园',
                    time: '09:00',
                    key: 2
                }
            ],
            dataSource2: []
        }
    }
    componentDidMount() {
        this.request()
    }
    request = () => {
        axios({
            methods: 'get',
            url: 'https://easy-mock.com/mock/5d2a9caa1bba03305e100ec5/api/table/list'
        }).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                let dataSource2 = res.data.result
                dataSource2.forEach((item, index) => {
                    item.key = index
                })
                this.setState({ dataSource2 })
            }
        })
    }
    render() {
        const columns = [
            {
                title: "id",
                dataIndex: 'id'
            },
            {
                title: "用户名",
                dataIndex: 'userName'
            },
            {
                title: "性别",
                dataIndex: 'sex'
            },
            {
                title: "状态",
                dataIndex: 'state'
            }, {
                title: "爱好",
                dataIndex: 'interest'
            },
            {
                title: "生日",
                dataIndex: 'birthday'
            },
            {
                title: "地址",
                dataIndex: 'address'
            },
            {
                title: "早起时间",
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table bordered columns={columns} dataSource={this.state.dataSource} pagination={false} />
                </Card>
                <Card title="动态数据渲染表格" style={{ margin: '10px 0' }}>
                    <Table bordered columns={columns} dataSource={this.state.dataSource2} pagination={false} />
                </Card>
            </div>
        );
    }
}