import React,{Component} from "react";
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../util/util.js';
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
		}

		
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                	<Col span={24}>
										<span className="welcome">欢迎，{this.state.uerName}</span>
										<a href="">退出</a>
									</Col>
								</Row>
								<Row className="breadcrumb">
									<Col span={4} className="breadcrumb-title">首页</Col>
									<Col span={20} className = "weather">
										<span className="date">{this.state.sysTime}</span>
										<span className="weather-detail">阴转多云</span>
									</Col>
							</Row>
            </div>
        )
    }
}
