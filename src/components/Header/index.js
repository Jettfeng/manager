import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: '河畔一角',
            sysTime: ''
        })
        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime())
            this.setState({ sysTime })
        }, 1000)
        this.getWeatherAPIData()
    }
    getWeatherAPIData() {
        let city = '北京'
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=h7A1sl7Y9uhGzdFlOP4ArGsCGtUqo8iX'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0]
                console.log(data);
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.wind
                })
            }
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}