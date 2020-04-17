import React from 'react';
import axios from 'axios';
import './Faves.css'


export default class Recommendations extends React.Component {
    state = {
        faveShow:''
    }

    componentDidMount(){
    axios.get(`http://localhost:4000/api/v1/shows`)
    .then((res) => {
        for (let i=0; i<res.data.length; i++)
            if(res.data[i]._id == this.props.show){
                this.setState({
                    faveShow: res.data[i]
                })
            }
    })
}
    render (){
        return(
            <div className="recommendations"> 
                <h1 className="title"> this is recommendations section! </h1>
                <p class="subtitle">{this.state.faveShow.title}</p>
                <img src={this.state.faveShow.img}></img>
            </div>
        )
    }
}