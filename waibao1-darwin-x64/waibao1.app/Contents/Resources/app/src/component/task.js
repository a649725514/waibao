import React , {Component} from 'react';
import  { Rate } from 'antd';
export default class Task extends Component{
    static defaultProps={
        task:"任务a",
        uploader:"发包者甲",
        project:"项目B",
        time:'8',
        stars:2,
        date:'2018.3.1-2018.4.1'
    };
    constructor(props){
		super(props);
		this.state={
			width:document.body.clientWidth,
            height:document.body.clientHeight
		};
    }
    render(){
        return (
            <div style={{
                display:'flex',
                width:this.state.width*0.8,
                height:this.state.height*0.12,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                //backgroundColor:'red'
              }}>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{fontSize:15,marginLeft:10}}>{this.props.task}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    marginRight:30
                  }}>
                    <Rate count={3} disabled defaultValue={this.props.stars} />
                  </div>
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{marginLeft:10}}>发布者：{this.props.uploader}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    marginRight:30
                  }}>
                    <h>所属项目：{this.props.project}</h>
                  </div>
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.8,
                  height:this.state.height*0.04,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-start',
                }}>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start',
                    //backgroundColor:'yellow',
                  }}>
                    <h style={{marginLeft:10}}>工作量：{this.props.time}</h>
                  </div>
                  <div style={{
                    display:'flex',
                    width:this.state.width*0.4,
                    height:this.state.height*0.04,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    marginRight:30
                  }}>
                    <h>{this.props.date}</h>
                  </div>
                </div>
              </div>
        );
    }
}