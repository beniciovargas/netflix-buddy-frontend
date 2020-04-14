import React from 'react';
import './Homepage.css'


export default class Homepage extends React.Component{



    render(){

        return(
            <section className ="hero is-fullheight">
                <div className = "hero-body">
                    <div className = "container">
                        <h1 className="title has-text-centered has-text-white-bis">Welcome to Netflix Buddy</h1>
                    </div>
                </div>
            </section>
        )
    }

}