import React from 'react';
import axios from 'axios';


export default class Showpage extends React.Component{
    state = {
        currentShow: '',
        currentShowId: null,
        dropdownClicked: false,
    }

    componentDidMount(){
        let id = this.props.location.params;
        console.log(id)
        axios.get('http://localhost:4000/api/v1/shows',)
        .then((res)=>{
            console.log(res.data)
            for (let i = 0; i<res.data.length; i++ ){
                if (res.data[i].id == id){
                    this.setState({
                        currentShow: res.data[i],
                        currentShowId: res.data[i]._id
                    })
                }
            }
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
        }
    }

    nextUpAdd = () => {
        console.log("next up selected!")
    }
    favesAdd = () => {
        console.log("faves selected!")
    }
    currentlyWatchingAdd = () => {
        console.log("currenly watching selected!")
    }

    render(){
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
                        <h1>this is the details page!</h1>
                        <p className="title">{this.state.currentShow.title}</p>
                        <p className="title">{this.state.currentShowId}</p>
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

