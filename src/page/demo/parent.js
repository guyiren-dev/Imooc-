import React,{Component} from "react";
import Children from "./children";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
					count: 0,
        }
    }

    render(){
        return (
        <div>
            <p>React生命周期,这是父组件</p>
            <button onClick = {this.handleClick.bind(this)}>
							点击一下
						</button>
						<p>{this.state.count}</p>
						<Children name = {this.state.count}></Children>
        </div>
        )
		}
		
		handleClick(){
			this.setState({
				count: this.state.count+1
			})
		}
}
export default Parent;