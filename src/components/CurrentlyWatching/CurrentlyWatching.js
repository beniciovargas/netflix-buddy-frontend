import React from 'react';


function CurrentlyWatching (props){

   
        return (
            <div class="tile is-parent">
                <div className="currently-watching"> 
                    <h1 className="title"> this what you're currently watching! </h1>
                    <h1 className="title"> {props.show.title} </h1>
                    <h1 className="title"> {props.show.synopsis} </h1>
                    <img src={props.show.img}></img>

                  
                </div>
        
            </div>
        )
    }


export default CurrentlyWatching;