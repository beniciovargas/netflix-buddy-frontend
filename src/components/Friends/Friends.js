import React from 'react';


function Friends (props){
   
    return (
        <div className="column is-one-third">
            <div className="card large">
                <div className="card-image">
                    <figure class="image">
                        <img src="http://dummyimage.com/450x250/"  alt="Image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="http://www.placecage.com/c/200/300" alt="Image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4 no-padding">{props.friend.username}</p>
                        </div>
                    </div>
                    <div className="content">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Friends;
