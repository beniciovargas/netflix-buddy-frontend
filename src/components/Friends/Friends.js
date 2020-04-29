import React from 'react';


function Friends (props){
   
    return (
        <div className="column is-one-third">
            <div className="card large">
                <div className="card-image">
                    <figure class="image">
                        <img src="https://placeimg.com/420/200/nature"  alt="Image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img className="is-rounded" src="http://www.placecage.com/c/200/200" alt="Image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4 no-padding">{props.friend.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Friends;

        // <div className="column is-one-third">
        //     <div className="card">
        //         <div className="card-content">
        //             <div className="media">
        //                 <div class="media-left">
        //                     <figure class="image is-128x128">
        //                         <img className="is-rounded" src="http://www.placecage.com/c/200/200" alt="Image"/>
        //                     </figure>
        //                 </div>
        //                 <div className="media-content">
        //                     <h1 className = "header-title title is-1 is-uppercase">Welcome {this.state.user}!</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>