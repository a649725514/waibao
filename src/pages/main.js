import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Divider, Pagination, } from 'antd';
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
  constructor(props) {
    super(props);
    this.state = ({
      //redirect:false,
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      tasksInfo: [],
      current: 1
    })
    // setInterval(()=>{
    //   this.setState({
    //     width:document.body.clientWidth,
    //     height:document.body.clientHeight
    //   })
    // },1)
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    var url = 'http://120.78.74.75:8080/demo/project/getProjectByUser'; // 接口url
    fetch(url, {
      "method": 'GET',
      "headers": {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDAwMCIsImNyZWF0ZWQiOjE1MjEyNjA3ODgwNDUsImV4cCI6MTUyMTg2NTU4OH0.o1ymUahE2zbZ-F00w44kOoJQvsTntkvG5CIXG5UQnC2bHSBYFpTD_VqdFKqDLdr3GQ4vUbGXmybQgzQWNBCUyg",
        "Content-Type": "application/json",
      },
    }).then(
      function (res) {
        if (res.ok) {
          return res.json()
        } else {
          { this.LogError(res) }
        }
      }
    ).then(function (PromiseValue) {
      for (var i = 0; i < PromiseValue.length; i++) {
        console.log(PromiseValue[i])
        return PromiseValue[i]
      }
    }).then((e) => {
      console.log("props111=====" + e);
      this.setState({  // setState 将数据塞在 state 中以便在组件间进行数据传递
        tasksInfo: e
      });
    });
    this.state.tasksInfo = Array.from(new Array(20), (val, index) => index);
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
        display: 'flex',
        width: this.state.width * 0.85,
        height: this.state.height,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Topbar />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ borderRadius: 0 }} type="primary">任务</Button>
          <Link to='/main2'><Button onClick={this.handleOnClick} style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>项目</Button></Link>

        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.04,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Search
            placeholder="项目名/任务名"
            onSearch={value => console.log(value)}
            style={{ width: this.state.width * 0.8 - 100 }}
          />
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          <Divider />
        </div>
        {this.state.tasksInfo.slice(this.state.current * 3 - 2, this.state.current * 3 + 1).map((taskInfo) => {
          return (
            <div>
              <Task task={taskInfo}/>
              <Selfdivider />
            </div>
          )
        })}

        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={3} onChange={this.onChange} total={this.state.tasksInfo.length} />
        </div>
      </div>

    );
  }
}

export default Main;