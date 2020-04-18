import React from 'react';


function Faves(props){

   
        return (
            <div class="tile is-parent">
                <div className="favorites"> 
                    <h1 className="title"> this is favorites section! </h1>
                    <h1 className="title"> {props.show.title} </h1>
                    <h1 className="title"> {props.show.synopsis} </h1>
                    <img src={props.show.img}></img>
                </div>
        
            </div>
        )
    }


export default Faves;