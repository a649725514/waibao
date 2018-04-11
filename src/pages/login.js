import React, { Component } from 'react';
import Topbar from '../component/topbar';
import { Input, Icon, Button } from 'antd';
import { Redirect } from 'react-router-dom';

const { ipcRenderer } = window.electron;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            userName: '',
            password: '',
            isLogin: false,
        })
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    emitEmpty1 = () => {
        this.passwordInput.focus();
        this.setState({ password: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    Login() {
        var url = 'http://120.78.74.75:8080/demo/auth'; // 接口url
        fetch(url, {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "username": this.state.userName,
                "password": this.state.password,
            })
        }).then(
            (res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    { console.log(res) }
                }

            }
        ).then((PromiseValue) => {
            if (PromiseValue == null) {
                alert("账号密码错误")
            } else {
                const reply = ipcRenderer.sendSync('Login', PromiseValue.token)
                if (reply == 'ok') {

                    this.setState({
                        isLogin: true
                    })
                }
            }
        })
    }
    render() {
        const { userName } = this.state;
        const { password } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffix1 = password ? <Icon type="close-circle" onClick={this.emitEmpty1} /> : null;
        if (this.state.isLogin) {

            return (

                <Redirect to="/main" />
            )
        }

        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="登录" />
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.94,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(0,116,200)'
                }}>
                    <img style={{
                        width: this.state.height * 0.3,
                        height: this.state.height * 0.3
                    }} src={require('../pic/icon.png')}>
                    </img>
                    <Input
                        style={{
                            width: this.state.height * 0.3,
                            marginBottom: 20,
                            marginTop: 20
                        }}
                        placeholder="请输入账号"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                    <Input
                        style={{
                            width: this.state.height * 0.3,
                            marginBottom: 20
                        }}
                        placeholder="请输入密码"
                        prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix1}
                        value={password}
                        onChange={this.onChangePassword}
                        ref={node => this.passwordInput = node}
                        type='password'
                    />
                    <div style={{
                        display: 'flex',
                        width: this.state.height * 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(0,207,79)',
                        borderRadius: 3,
                        padding: 3
                    }} onClick={() => this.Login()}>
                        <h style={{
                            color: 'white',
                            fontSize: 18
                        }}>{'登 录'}</h>
                    </div>
                </div>
            </div>
        );
    }
}