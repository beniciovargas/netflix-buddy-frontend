import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Results extends React.Component{
    state={
        detailsClicked: false,
        selectedShowId: '',
        showDbId: null,
    }

    addShow = () => {
        fetch(`http://localhost:4000/api/v1/shows`,{
            "method": "POST",
            "headers":{
                "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmkiLCJfaWQiOiI1ZTkzZTQ1M2Y4ZTUxMjI1NzQ3YTJkNTEiLCJpYXQiOjE1ODY3NTA1NDcsImV4cCI6MTU4OTM0MjU0N30.43A7dtYQS1uLht3EgELowcvM_1VIofZl8gHQEojeuv4", 
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "vtype": `${this.props.result.vtype}`,
                "img": `${this.props.result.img}`,
                "title": `${this.props.result.title}`,
                "synopsis": `${this.props.result.synopsis}`,
                "id": `${this.props.result.id}`
            })
        })
        .catch((err) => {
            console.log(err)
        })
        this.setState({
            detailsClicked: true,
            selectedShowId: this.props.result.id
        })
    }

    getShowDbId = () => {
        axios.get(`http://localhost:4000/api/v1/shows`)
        .then((res)=>{
            for (let i=0; i<res.data.length; i++)
                if (res.data[i].id === this.state.selectedShowId){
                    this.setState({
                        showDbId: res.data[i]._id
                    })
                }
        })
    }

    render(){
        if (this.state.detailsClicked && this.state.selectedShowId){
            this.getShowDbId();
        }
        if(this.state.showDbId !== null){
            return <Redirect to={`/shows/${this.state.showDbId}`}/>
        }

        return(

            <div className="column is-one-third">
                <div className="card large round">
                    <div className="card-image ">
                        <figure className="image">
                            <img src={this.props.result.img} alt="Image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4 no-padding">{this.props.result.title}</p>
                            </div>
                        </div>
                        <div class="content">
                            {this.props.result.synopsis}
                            <br/>
                            <a className="button is-primary" onClick={this.addShow}>View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}