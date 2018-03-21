import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Pagination, } from 'antd';
import Msg from '../component/msg';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
//const test = './pages/test';
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      Msgs: [],
      current: 1
    })
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    this.state.Msgs = Array.from(new Array(20), (val, index) => index);

  }
  render() {
    return (
      <div style={{
        display: 'flex',
        width: this.state.width * 0.85,
        height: this.state.height,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Topbar title="我的消息" />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ borderRadius: 0 }} type="primary">个人</Button>
          <Link to='/message2'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>系统</Button></Link>
        </div>
        <div>
          {this.state.Msgs.slice(this.state.current * 4 - 3, this.state.current * 4 + 1).map((Message) => {
            return (
              <Msg user={'用户'+Message} situation="做的不错！" comefrom="任务a" />
            )
          })}
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          //marginTop:10,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={4} onChange={this.onChange} total={this.state.Msgs.length} />
        </div>
      </div>

    );
  }
}

export default Message;