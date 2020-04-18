import React from 'react';


function Friends (props){

   
        return (
            <div class="tile is-parent">
                <div className="friends-section"> 
                    <h1 className="title"> FRIENDS! </h1>
                    <h1 className="title"> {props.friend.username} </h1>
                </div>
            </div>
        )
    }


export default Friends;
