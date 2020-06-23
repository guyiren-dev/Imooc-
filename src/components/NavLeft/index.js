import React,{Component} from "react";
import MenuConfig from './../../config/menuConfig';
import {Menu} from "antd";
import { Link } from 'react-router-dom';
import "./index.less"

const { SubMenu } = Menu;
class NavLeft extends Component{
		// 组件挂载前
    componentDidMount(){
			const menuTreeNode = this.renderMenu(MenuConfig);
			// 把数据存起来
			this.setState({
				menuTreeNode
			})
		}
		// 菜单渲染(递归函数)
		renderMenu = (data)=>{
		 return data.map((item)=>{
				if(item.children){
						return (
							<SubMenu key={item.key} title={item.title}>
								{this.renderMenu(item.children)}
							</SubMenu>
				)}
				return (<Menu.Item  key = {item.key}>
									<Link to={item.key}>{item.title}</Link>
								{item.title}
								</Menu.Item>)
		})
	}
	
    render(){
        return(
            <div>
                <div className = 'logo'>						
                    <img src="/assets/logo-ant.svg" alt=""></img>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme = "dark">
									{this.state.menuTreeNode}
							  </Menu>
            </div>
        )
    }
}
export default NavLeft;


