import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user);
  }

  render() {
    return(
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>Username: 
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Password: 
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;