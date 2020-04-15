import React from 'react';
import Results from '../Results/Results';
import './Searchpage.css'


export default class Searchpage extends React.Component{
    state = {
        query: '',
        response: [],
    }    

    handleChange = (event) =>{
        this.setState({
            query: event.target.value
        })
    }

    search = () => {
        fetch(`https://unogsng.p.rapidapi.com/search?country_andorunique=unitedstates&limit=100&audio=english&query=${this.state.query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f3d5f8decemsh5e4802d96d38dfcp1f2f5cjsn87b73be2ffd8",
            },
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                response: data.results
            });
            console.log(this.state.response)
        });
    }

    // addShow = (event) => {
    //     event.preventDefault();
    //     console.log('adding show...')
    //     fetch(`http://localhost:4000/api/v1/shows`,{
    //         "method": "POST",
    //         "headers":{
    //             "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmkiLCJfaWQiOiI1ZTkzZTQ1M2Y4ZTUxMjI1NzQ3YTJkNTEiLCJpYXQiOjE1ODY3NTA1NDcsImV4cCI6MTU4OTM0MjU0N30.43A7dtYQS1uLht3EgELowcvM_1VIofZl8gHQEojeuv4", 
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify()
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    //     })
    // }
    

    render(){
        let results;
        if (this.state.response){
            results = this.state.response.map((result)=> {
                return(
                    <Results
                        result = {result}
                        key = {result.id}
                    />
                )
            })
        }
      
        return(
            <div className = "searchpage">
                <div className="field has-addons">
                    <div className = "control">
                        <input onChange = {this.handleChange} class="input is-primary" type="text" placeholder="search"></input>
                    </div>
                    <div className = "control"></div>
                        <a onClick={this.search} class="button is-primary">Submit</a>
                </div>
                
                <div class="tile is-ancestor is-one-quarter">
                {results}
                </div>
            </div>
        )
    }

}