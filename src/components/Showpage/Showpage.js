import React from 'react';
import axios from 'axios';
import setAuthHeader from '../../utils/setAuthHeader';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export default class Showpage extends React.Component{
    state = {
        user:'',
        userId: '',
        currentShow: '',
        currentShowId: null,
        dropdownClicked: false,
        redirect: false,
    }

    componentDidMount(){
        if (localStorage.jwtToken) {
            setAuthHeader(localStorage.jwtToken);
            const decoded = jwt_decode(localStorage.getItem('jwtToken'));
            this.setState({
              user: decoded.username,
              userId: decoded._id
            })
        }

        let id = this.props.match.params.id;
        axios.get(`http://localhost:4000/api/v1/shows/${id}`)
        .then((res)=>{
                this.setState({
                    currentShow: res.data,
                    currentShowId: res.data._id
                })
            })
        .catch(err => console.log(err))
    }

    handleButtonClick = () => {
        this.setState ({
            dropdownClicked: this.state.dropdownClicked ? false : true
        })
        if(this.state.dropdownClicked){
            let dropdown = document.querySelector('.dropdown');
            dropdown.classList.add("is-active");
        }else{
            let dropdown = document.querySelector('.dropdown');
            dropdown.classList.remove("is-active");
        }
    }

    handleRedirect =() =>{
        if (this.state.redirect){
            return <Redirect to={`/profile/${this.state.userId}`}/>   
        }
    }

    nextUpAdd = () => {
        console.log("next up selected!")
        axios.put(`http://localhost:4000/api/v1/users/${this.state.userId}/updateNext`,{
            nextUp: this.state.currentShow
        })
        .then((res)=>{console.log(res)})
        .catch((err)=> {console.log(err)})
        this.setState({
            redirect:true
        }) 
    }

    favesAdd = () => {
        console.log("faves selected!")
        axios.put(`http://localhost:4000/api/v1/users/${this.state.userId}`,{
            faves: this.state.currentShow
        })
        .then((res)=>{console.log(res)})
        .catch((err)=> {console.log(err)})
        this.setState({
            redirect:true
        }) 
    }

    currentlyWatchingAdd = () => {
        console.log("currently watching selected!")
        axios.put(`http://localhost:4000/api/v1/users/${this.state.userId}`,{
            currentlyWatching: this.state.currentShow
        })
        .then((res)=>{console.log(res)})
        .catch((err)=> {console.log(err)})
        this.setState({
            redirect:true
        }) 
    }


    render(){
        if (this.state.redirect){
            return <Redirect to={`/profile/${this.state.userId}`}/>   
        }
        return(
            <div>
                <div className="dropdown">
                    <div className="dropdown-trigger">
                        <button className="button is-primary" onClick={this.handleButtonClick} aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Add to your profile</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a onClick={this.nextUpAdd} className="dropdown-item">
                                Add to Next Up
                            </a>
                            <hr className="dropdown-divider"></hr>
                            <a onClick={this.favesAdd} className="dropdown-item">
                                Add to Faves
                            </a>
                            <hr className="dropdown-divider"></hr>
                            <a onClick={this.currentlyWatchingAdd} className="dropdown-item">
                                Add to Currently Watching
                            </a>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{this.state.currentShow.title}</p>
                        <p className="subtitle">{this.state.currentShow.synopsis}</p>
                        <figure className="image is-4by3">
                            <img src={this.state.currentShow.img}/>
                        </figure>
                    </article>
                </div>
            </div>
        )
    }
}

