import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        echarts.registerTheme('Imooc', echartTheme) //注入主题：需要提前注入
    }
    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: "订单量",
                    type: 'bar',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend: {
                data: ['OFO', '摩拜', '小蓝']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: "OFO",
                    type: 'bar',
                    data: [2000, 6000, 4500, 3600, 3600, 7200, 800]
                },
                {
                    name: "摩拜",
                    type: 'bar',
                    data: [1340, 2640, 6400, 8400, 3600, 9200, 6500]
                },
                {
                    name: "小蓝",
                    type: 'bar',
                    data: [5750, 5670, 4660, 3450, 3450, 3440, 3340]
                }
            ]
        }
        return option
    }
    render() {
        return (
            <div>
                <Card title="柱形图表之一">
                    <ReactEcharts option={this.getOption()} theme='Imooc' style={{ height: 500 }}></ReactEcharts>
                </Card>
                <Card title="柱形图表之二" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme='Imooc' style={{ height: 500 }}></ReactEcharts>
                </Card>
            </div>
        );
    }
}