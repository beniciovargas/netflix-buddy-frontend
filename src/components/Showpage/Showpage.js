import React from 'react';
import axios from 'axios';


export default class Showpage extends React.Component{
    state = {
        currentShow: '',
        currentShowId: null,
    }

    componentDidMount(){
        let id = this.props.location.params;
        axios.get('http://localhost:4000/api/v1/shows')
            .then((res)=>{
                console.log(res.data[1])
                let detailedShow = res.data[1]
                this.setState({
                    currentShow: detailedShow,
                    currentShowId: id
                })
            })
    }


    render(){
        return(
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h1>this is the details page!</h1>
                    <p class="title">{this.state.currentShow.title}</p>
                    <p class="subtitle">{this.state.currentShow.synopsis}</p>
                    <figure class="image is-4by3">
                        <img src={this.state.currentShow.img}/>
                    </figure>
                </article>
            </div>
        )
    }
}

