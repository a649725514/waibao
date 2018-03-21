import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Pagination, Input } from 'antd';
import Topbar from '../component/topbar'
//import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import Contactcard from '../component/contactcard';
//const test = './pages/test';
const Search = Input.Search;
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      persion: [],
      current: 1
    })
  }

  onChange = (page) => {
    this.setState({
      current: page,
    });
  }

  componentWillMount() {
    this.state.persion = Array.from(new Array(20), (val, index) => index);

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
        <Topbar title="通讯录" />
        <div style={{
          display: 'flex',
          width: this.state.width * 0.85,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ borderRadius: 0 }} type="primary">外包人员</Button>
          <Link to='/contact2'><Button style={{ borderRadius: 0, backgroundColor: '#f5f5f5' }}>发包人员</Button></Link>
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
            placeholder="姓名/外包公司/技能"
            onSearch={value => console.log(value)}
            style={{ width: this.state.width * 0.6 }}
          />
        </div>
        <div style={{
          display: 'flex',
          width: this.state.width * 0.65,
          //height:this.state.height*0.7,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginTop: 20,
        }}>
          {this.state.persion.slice(this.state.current * 6 - 5, this.state.current * 6 + 1).map((persionInfo) => {
            return (
              <div>
                <Contactcard src={require('../pic/01.png')} name={persionInfo} />
              </div>
            )
          })}

        </div>
        <div style={{
          position: 'absolute',
          bottom: 10,
          display: 'flex',
          width: this.state.width * 0.8,
          height: this.state.height * 0.08,
          flexDirection: 'row',
          //marginTop:10,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'yellow'
        }}>
          <Pagination current={this.state.current} pageSize={6} onChange={this.onChange} total={this.state.persion.length} />
        </div>
      </div>

    );
  }
}

export default Contact;