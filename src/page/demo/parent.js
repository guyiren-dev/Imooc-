import React,{Component} from "react";
import Children from "./children";
import { Button } from 'antd';
import './style.less';

class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
			count: 0,
        }
    }

    render(){
        return (
        <div className="div1">
            <p className="content">React生命周期,这是父组件</p>
            <button onClick = {this.handleClick.bind(this)}>
							点击一下
						</button>
            <Button onClick = {this.handleClick.bind(this)}>Antd点击一下</Button>
            <p>{this.state.count}</p>
            <Children name = {this.state.count}></Children>
        </div>
        )
		}
		
		handleClick(){
			this.setState({
				count: this.state.count + 1
			})
		}
}
export default Parent;