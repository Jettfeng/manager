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
            ]
        }
    }
    handleCallback = (key) => {
        message.info(`Hi,你选择了页签:${key}`)
    }
    componentDidMount() {

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
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
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