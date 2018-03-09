import React , {Component} from 'react';
import pencil from '../icon/pencil.svg';
export default class Selfsay extends Component{
    static defaultProps={

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
                width:this.state.width*0.85,
                height:this.state.height*0.2,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
              }}>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.85,
                  height:this.state.height*0.05,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
              }}>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85/2,
                    height:this.state.height*0.05,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                }}>
                    <h style={{marginLeft:20}}>个人介绍</h>
                </div>
                <div style={{
                    display:'flex',
                    width:this.state.width*0.85/2,
                    height:this.state.height*0.05,
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center',
                }}>
                    <img style={{marginRight:20}} src={pencil}></img>
                </div>
              </div>
              <div style={{
                  width:this.state.width*0.85,
                  height:1,
                  backgroundColor:'#e9e9e9'
              }}>
              </div>
              <div style={{
                  display:'flex',
                  width:this.state.width*0.85,
                  height:this.state.height*0.15,
                  flexDirection:'column',
                  justifyContent:'flex-start',
                  alignItems:'flex-start',
              }}>
                <texrarea style={{marginLeft:20,fontSize:12,marginTop:20}}>{'如果你无法简洁的表达你的想法，那只说明你还不够了解它。'}</texrarea>
                <texrarea style={{marginLeft:20,fontSize:12}}>{' --阿尔伯特·爱因斯坦'}</texrarea>
              </div>
              
            </div>
        );
    }
}