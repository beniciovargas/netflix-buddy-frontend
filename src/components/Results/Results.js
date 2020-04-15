import React from 'react';

export default class Results extends React.Component{
// const Results = (props) =>{

    addShow = () => {
        console.log('adding show...')
        fetch(`http://localhost:4000/api/v1/shows`,{
            "method": "POST",
            "headers":{
                "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmkiLCJfaWQiOiI1ZTkzZTQ1M2Y4ZTUxMjI1NzQ3YTJkNTEiLCJpYXQiOjE1ODY3NTA1NDcsImV4cCI6MTU4OTM0MjU0N30.43A7dtYQS1uLht3EgELowcvM_1VIofZl8gHQEojeuv4", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }

    render(){
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