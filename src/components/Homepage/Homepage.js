import React from 'react';
import './Homepage.css'


export default class Homepage extends React.Component{



    render(){

        return(
            <section className ="hero homepage-hero is-fullheight">
                <div className = "hero-body">
                    <div className = "container">
                        <header className="is-size-1-desktop has-text-centered has-text-white-bis has-text-weight-semibold">Welcome to Netflix Buddy</header>
                    </div>
                </div>
            </section>
        )
    }

}