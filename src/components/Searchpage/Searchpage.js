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
            <div className="container">
                <div id="flow">
                    <span class="flow-1"></span>
                    <span class="flow-2"></span>
                    <span class="flow-3"></span>
                </div>
                <div class="section">
                    <div class="box">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input onChange = {this.handleChange} class="input is-primary" type="text" placeholder="search"></input>
                            </div>
                            <div class="control">
                                <a onClick={this.search} class="button is-primary">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row columns is-multiline">
                {results}
                </div>
            </div>
        )
    }

}