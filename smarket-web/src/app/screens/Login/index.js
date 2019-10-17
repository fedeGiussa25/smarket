import React, { Component } from 'react';

import logo from '../../assets/logo.jpeg';

import LoginForm from './components/LoginForm'

import './styles.scss';

class Login extends Component {
  handleSubmit = values => {}

  render() {
    return (
        <div className="container">
          <div className="login">
            <img src={logo} className="logo" alt="logo"/>
            <text className="title">{'Inicio de sesión'}</text>
            <text className="banner">{'Ingrese los siguientes datos para ingresar al administrador'}</text>
            <LoginForm onSubmit={this.handleSubmit}/>
          </div>
        </div>
    );
  }
}

export default Login;
