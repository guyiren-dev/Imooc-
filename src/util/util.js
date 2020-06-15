// 封装一个记录时间的函数
export default {
  formateDate(time){
    if(!time){ return '' }
    let date = new Date(time);
    return date.getFullYear() + "-"+(date.getMonth()+1) + "-"+date.getDate() + "  "+ date.getHours() + ":"+ date.getMinutes() + ":"+ date.getSeconds()
  }
}