// 封装jsonp===跨域请求数据
import Jsonp from 'jsonp';
export default class Axios {
  static jsonp(options){
    return new Promise((resolve,reject) =>{
      Jsonp(options.url,{
        param: 'callback'
      },function(err,response){
        if(response.status === "1"){
          resolve(response);
        }else{
          reject(err.message)
        }
      })
    })
  }
}