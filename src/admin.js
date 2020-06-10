import React,{Component} from 'react';
import { Row, Col } from 'antd';
import Header from "./components/Header";
import Footer from "./components/Footer";

class Admin extends Component{
    constructor(props){
				super(props);
				this.state = {

				}
		}
		
		render(){
			return(
				<div>
					<Row>
						<Col span={3}>菜单</Col>
						<Col span={21}>
							<Header></Header>
							<Row>内容</Row>
							<Footer></Footer>
						</Col>
					</Row>
				</div>
			)
		}

}

export default Admin;