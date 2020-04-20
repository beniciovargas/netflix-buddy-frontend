import React from 'react';
import './Homepage.css'



export default class Homepage extends React.Component{



    render(){
        return(
            <div className="homepage-container">
                <section class="hero homepage-hero is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="welcome-title title is-spaced is-1 has-text-centered">
                                Welcome to Netflix Buddy
                            </h1>
                            <h2 class="welcome-subtitle is-spaced subtitle is-3 has-text-centered">
                                An app to help you find something to watch
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}
