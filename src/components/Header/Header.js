import React, {Component} from 'react'
import logo from '../../assets/john_sombrero.png'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="header">
      <Link to="/">
      <div className="logo">
        <img src={logo} alt="sombrero logo" />
        <h1>Comprajuegos</h1>
      </div>
      </Link>
      <div className="login-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

      </div>
    </div>
    )
  }
}