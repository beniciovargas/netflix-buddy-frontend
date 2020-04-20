import React from 'react';


function NextUp(props){
    return (
            <div className="column is-one-quarter">
                <div className="card large">
                    <div className="card-image">
                        <figure className="image">
                            <img src={props.show.img} alt="Image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4 no-padding">{props.show.title}</p>
                            </div>
                        </div>
                        <div className="content">
                            {props.show.synopsis}
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default NextUp;
