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

        <div>
            <section class="hero search-hero">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column is-12">
                            <div class="container content">
                                <h1 class="search-header-text title">See what's on Netflix!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div class="box">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input onChange = {this.handleChange} class="input" type="text"></input>
                        </div>
                        <div class="control">
                            <a onClick={this.search} class="button">Search</a>
                        </div>
                    </div>
                </div>
                <div class="row columns is-multiline">
                    {results}
                </div>
            </div>
        </div>
        )
    }

}