import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  { Button, Input, Divider, Pagination, } from 'antd';
import '../App.css';
import Task from '../component/task';
import Selfdivider from '../component/divider'
import Topbar from '../component/topbar'
import { Link } from "react-router-dom";
//import { Router, Route, IndexRoute } from 'react-router'
//import { Redirect } from 'react-router-dom';
//import test from './pages/test'

const Search = Input.Search;
//const test = './pages/test';
class Main extends Component {
  constructor(props){
    super(props);
    this.state=({
      //redirect:false,
      width:document.body.clientWidth,
      height:document.body.clientHeight
    })
    // setInterval(()=>{
    //   this.setState({
    //     width:document.body.clientWidth,
    //     height:document.body.clientHeight
    //   })
    // },1)
  }
  // handleOnClick = () => {  
  //   // some action...  
  //   // then redirect  
  //   this.setState({redirect: true});  
  // }
  render() {
    // if (this.state.redirect) {  
    //   return <Redirect push to="/pages/test"/>; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
    // }
    return (
      
        <div style={{
          display:'flex',
          width:this.state.width*0.85,
          height:this.state.height,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center'
        }}>
          <Topbar />
          <div style={{
            display:'flex',
            width:this.state.width*0.85,
            height:this.state.height*0.08,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Button style={{borderRadius:0}} type="primary">任务</Button>
            <Link to='/main2'><Button onClick={this.handleOnClick} style={{borderRadius:0,backgroundColor:'#f5f5f5'}}>项目</Button></Link>
            
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.04,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Search
              placeholder="项目名/任务名"
              onSearch={value => console.log(value)}
              style={{ width: this.state.width*0.8-100}}
            />
          </div>
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-end',
          }}>
            <Divider />
          </div>
          <Task />
          <Selfdivider />
          <Task />
          <Selfdivider />
          <Task />
          <Selfdivider />
          <div style={{
            display:'flex',
            width:this.state.width*0.8,
            height:this.state.height*0.08,
            flexDirection:'row',
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

export default Main;