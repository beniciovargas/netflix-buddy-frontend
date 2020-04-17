import React from 'react';
import axios from 'axios';


export default class UpNext extends React.Component {
    state = {
        nextShow:''
    }

    componentDidMount(){
    axios.get(`http://localhost:4000/api/v1/shows`)
    .then((res) => {
        for (let i=0; i<res.data.length; i++)
            if(res.data[i]._id == this.props.show){
                this.setState({
                    nextShow: res.data[i]
                })
            }
    })
}
    render(){
        return (
            <div class="tile is-parent">
                <div className="nextup"> 
                    <h1 className="title"> this is next up section! </h1>
                    <p class="subtitle">{this.state.nextShow.title}</p>
                    <img src={this.state.nextShow.img}></img>
                </div>
        
            </div>
        )
    }
}
