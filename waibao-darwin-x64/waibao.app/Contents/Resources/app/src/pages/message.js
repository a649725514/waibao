import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  { Button, Pagination, } from 'antd';
import Msg from '../component/msg';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
//const test = './pages/test';
class Message extends Component {
  constructor(props){
    super(props);
    this.state=({
      width:document.body.clientWidth,
      height:document.body.clientHeight
    })
  }
  render() {
    return (      
        <div style={{
          display:'flex',
          width:this.state.width*0.85,
          height:this.state.height,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center'
        }}>
          <Topbar title="我的消息" />
          <div style={{
            display:'flex',
            width:this.state.width*0.85,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Button style={{borderRadius:0}} type="primary">个人</Button>
            <Link to='/message2'><Button style={{borderRadius:0,backgroundColor:'#f5f5f5'}}>系统</Button></Link> 
          </div>
          <Msg user="用户H" situation="做的不错！" comefrom="任务a" />
          <Msg />
          <Msg />
          <Msg />
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            //marginTop:10,
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'yellow'
          }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      
    );
  }
}

export default Message;