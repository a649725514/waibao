import React, { Component } from 'react';
import 'antd/dist/antd.css';
import leaf from '../icon/leaf.svg'
import cog from '../icon/cog.svg'
import close from '../icon/close.svg'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Topbar extends Component {
    static defaultProps={
        title:'开发者工作台'
    };
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight
        })
      }
      render(){
          return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height*0.06,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#f5f5f5'
              }}>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.75,
                  height:this.state.height*0.06,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:this.state.width*0.09
                }}>
                  {this.props.title}
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.1,
                  height:this.state.height*0.06,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                }}>
                  <img src={leaf} alt="leaf"></img>
                  <img style={{marginLeft:15,marginRight:15}} src={cog} alt="cog"></img>
                  <img style={{marginRight:15}} src={close} alt="close"></img>
                </div>
              </div>
          );
      }
}