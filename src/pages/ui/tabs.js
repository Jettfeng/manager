import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;
export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            panes: [
                { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
                { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
                { title: 'Tab 3', content: 'Content of Tab Pane 3', key: '3' }
            ],
            activeKey: '',
            newTabIndex: 0
        }
    }
    componentDidMount() {
        this.setState({
            activeKey: this.state.panes[0].key
        })
    }
    handleCallback = (key) => {
        message.info(`Hi,你选择了页签:${key}`)
    }
    onChange = (activeKey) => {
        this.setState({ activeKey })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }
    add = () => {
        const { panes } = this.state
        const activeKey = `newTab${this.state.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey })
    }
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key
            } else {
                activeKey = panes[0].key
            }
        }
        this.setState({ panes, activeKey })
    }
    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="diff" />Tab 2</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                        tabBarGutter={10}
                    >
                        {
                            this.state.panes.map((panel) =>
                                <TabPane tab={panel.title} key={panel.key}>
                                    {panel.content}
                                </TabPane>)
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}