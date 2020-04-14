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
                "x-rapidapi-key": "9d2f127181msh3e554cb789a066cp19ab50jsnc60d2a62069b",
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

    render(){
        let results;
        if (this.state.response){
            results = this.state.response.map((result)=> {
                return(
                    <Results
                        result = {result.title}
                        key = {result.id}
                    />
                    
                )
            })
        }

        return(
            <div className = "searchpage">
                <h1 className="title">this is the searchpage!!</h1>
                <div className="field has-addons">
                    <div className = "control">
                        <input onChange = {this.handleChange} class="input is-primary" type="text" placeholder="search"></input>
                    </div>
                    <div className = "control"></div>
                        <a onClick={this.search} class="button is-primary">Submit</a>
                </div>
                {results}
            </div>
        )
    }

}