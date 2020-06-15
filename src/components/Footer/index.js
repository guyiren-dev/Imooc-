import React,{Component} from "react";
import './index.less';

export default  class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="footer-main">版权所有：慕课网&gyr (推荐使用谷歌浏览器，可以获得更佳操作页面体验) 技术支持：gyr
            </div>
        )
    }
}
