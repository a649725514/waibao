import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Selfmsgcard from '../component/selfmsgcard';
import Bolddivider from '../component/bolddivider';
import Selfsay from '../component/selfsay';
import Workexp from '../component/workexp';
import Workskill from '../component/workskill';
import { Scrollbars } from 'react-custom-scrollbars';
import Workproject from '../component/workproject';
export default class Selfmessage extends Component {
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
                <Topbar title="个人信息" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Selfmsgcard />
                    <Bolddivider />
                    <Selfsay />
                    <Bolddivider />
                    <Workexp />
                    <Bolddivider />
                    <Workskill />
                    <Bolddivider />
                    <Workproject />
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}