import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div id="idSignupAndLogin">
        <h1 className="whiteBoardTitle">
          whiteboard app
        </h1>

        <div className="signupLoginLinks">
          <Link to='/login'>
            <button className='activeButton'>Login</button>
          </Link>
          <br />
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
        </div>


        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />

          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
