import React from 'react';
import './Login.css'

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

    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="login container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title">Login</h3>
            <hr/>
            <p className="subtitle"> Please login to proceed </p>
            <div className="box">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <label>Username: 
                      <input
                        className="input is-small"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}>
                      </input>
                    </label>
                  </div>
                </div>
                <br />
                <div className="field">
                  <div className="control">
                    <label>Password: 
                      <input
                        className="input is-small"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                      </input>
                    </label>
                  </div>
                </div>
                <br />
                <button type="submit" class="button is-fullwidth">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Login;