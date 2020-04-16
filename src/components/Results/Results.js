import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Results extends React.Component{
    state={
        detailsClicked: false,
        selectedShowId: '',
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

    render(){
        if (this.state.detailsClicked && this.state.selectedShowId){
            console.log (this.state.selectedShowId)
            return <Redirect to={{
                pathname: "/shows",
                params: this.state.selectedShowId
            }}/>
        }

        return(
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">{this.props.result.title}</p>
                    <figure class="image is-4by3">
                        <img src={this.props.result.img}/>
                    </figure>
                    <a className="button is-primary" onClick={this.addShow}>View Details</a>
                </article>
            </div>
        )
    }
}