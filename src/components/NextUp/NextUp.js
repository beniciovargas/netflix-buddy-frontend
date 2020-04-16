import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';

export default class UpNext extends React.Component {
    

    render(){
        return (
            <div class="tile is-parent">
                <div className="recommendations"> 
                    <h1 className="title"> this is next up section! </h1>
                </div>
                 {/*<article class="tile is-child box">
                    <p class="title">{this.props.currentlyWatching}</p>
                   <p class="subtitle">{this.props.nextUp}</p>
                     <figure class="image is-4by3">
                        <img src={this.props.img}/>
                    </figure> 
                </article>*/}
            </div>
        )
    }
}
