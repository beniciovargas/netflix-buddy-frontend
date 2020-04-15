import React from 'react';


const Showpage = (props) =>{
    return(

        <div class="tile is-parent">
            <article class="tile is-child box">
            <p class="title">{props.result.title}</p>
            <p class="subtitle">{props.result.synopsis}</p>
                <figure class="image is-4by3">
                    <img src={props.result.img}/>
                </figure>
            </article>
        </div>
    )
}

export default Showpage;