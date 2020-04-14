import React from 'react';

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
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <label>Name: 
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
          <label>Re-enter Password: 
            <input
              type="password"
              name="password2"
              value={this.state.password2}
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


{/* <div>
                    <button onClick = {this.modalClicked} className = "button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Register</button>
                </div>
                <div className="modal">
                    <div className="modal-background"></div>
                        <div className="modal-content">
                            register now
                        </div>
                    <button onClick={this.modalClose} className="modal-close is-large" aria-label="close"></button>
                </div> */}
export default Register;