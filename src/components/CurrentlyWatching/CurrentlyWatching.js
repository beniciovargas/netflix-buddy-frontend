import React from 'react';
import './CurrentlyWatching.css'


export default class CurrentlyWatching extends React.Component {

    render (){
        return(
            <div className="currently-watching"> 
                <h2 className="title"> this is the currently watching section! </h2>
                <p>{this.props.nextUp}</p>
            </div>
        )
    }
}