import React from 'react';
import './Register.css'

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    password2: ''
  }


// modalClicked(){
//   let modal = document.querySelector('.modal');
//   modal.classList.add('is-active');
//   }

// modalClose(){
//   let modal = document.querySelector('.modal');
//   modal.classList.remove('is-active');
//   }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.register(newUser);
  }

  render() {
    return(
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="register container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title"> Register </h3>
              <hr />
              <p className="subtitle">Please enter a username and password</p>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <label>Name: 
                        <input
                          className="input is-small"
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}>
                        </input>
                      </label>
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
                          <br />
                          <label>Re-enter Password: 
                            <input
                              className="input is-small"
                              type="password"
                              name="password2"
                              value={this.state.password2}
                              onChange={this.handleChange}>
                            </input>
                          </label>
                          <br />
                          <br />
                          <button type="submit" className="button is-fullwidth">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Register;