import React,{Component} from "react";
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../util/util.js';
import axios from '../../axios'
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
					uerName: "gyr",
				}
				setInterval(()=>{
					let sysTime = Util.formateDate(new Date().getTime());
					this.setState({
						sysTime
					})
				},1000)
				this.getWeatherAPIData();
		}
		
		getWeatherAPIData(){
			axios.jsonp({
			 url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=320100&key=21e3af36059cd35d7b1df40b407963a4'
			}).then((res)=>{
				if(res.status === "1"){
					let data  = res.lives[0];
					this.setState({
						dataWeather: data.weather,
						dataCity: data.city
					})
				}
			})
		}

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                	<Col span={24}>
										<span className="welcome">欢迎，{this.state.uerName}</span>
										<a href="#">退出</a>
									</Col>
								</Row>
								<Row className="breadcrumb">
									<Col span={4} className="breadcrumb-title">首页</Col>
									<Col span={20} className = "weather">
										<span className="date">{this.state.sysTime}</span>
										<span className="weather-data">
												{this.state.dataWeather}
										</span>		
										<span className="weather-city">{this.state.dataCity}</span>
									</Col>
							</Row>
            </div>
        )
    }
}
