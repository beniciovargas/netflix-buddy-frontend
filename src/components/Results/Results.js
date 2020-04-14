import React from 'react';



const Results = (props) =>{
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




    /* <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props.result.img} alt="Placeholder image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{props.result.title}</p>
                </div>
            </div>
            <div className="content">
                {props.result.synopsis}
            </div>
        </div>
    </div> */
    )

}

export default Results;