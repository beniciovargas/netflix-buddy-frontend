import React from 'react';
import './CurrentlyWatching.css'
import axios from 'axios';


export default class CurrentlyWatching extends React.Component {
    state = {
        watchingShow:''
    }

    componentDidMount(){
    axios.get(`http://localhost:4000/api/v1/shows`)
    .then((res) => {
        for (let i=0; i<res.data.length; i++)
            if(res.data[i]._id == this.props.show){
                this.setState({
                    watchingShow: res.data[i]
                })
            }
    })
}
    render (){
        return(
            <div className="currently-watching"> 
                <h2 className="title"> this is the currently watching section! </h2>
                <p class="subtitle">{this.state.watchingShow.title}</p>
                <img src={this.state.watchingShow.img}></img>
            </div>
        )
    }
}