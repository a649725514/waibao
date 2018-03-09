import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  { Pagination,Button } from 'antd';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import Msg2 from '../component/msg2';
//const test = './pages/test';
class Message2 extends Component {
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
            <Link to='/message'><Button style={{borderRadius:0,backgroundColor:'#f5f5f5'}}>个人</Button></Link>
            <Button type="primary" style={{borderRadius:0}} >系统</Button>
          </div>
          <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'flex-start',
              alignItems:'center'
          }}>
            <Msg2 />
          </div>
          <div style={{
              position:'float',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              marginTop:20
          }}>
            <h style={{color:'grey'}}>暂无更多</h>
          </div>
          <div style={{
            position:'absolute',
            bottom:10,
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
            marginTop:10,
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

export default Message2;