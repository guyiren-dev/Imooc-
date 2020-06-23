import React,{Component} from 'react';
import './index.less'

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="home-page">
          欢迎学习IMooc后台管理系统
      </div>
    )
  }
}