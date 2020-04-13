import React from 'react';


export default class Homepage extends React.Component{
    state={

    }


modalClicked(){
    let modal = document.querySelector('.modal');
    modal.classList.add('is-active');
    }

modalClose(){
    let modal = document.querySelector('.modal');
    modal.classList.remove('is-active');
    }


    render(){

        return(
            <div>
                <h1>this is the homepage</h1>
                {/* <div>
                    <button onClick = {this.modalClicked} className = "button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Register</button>
                </div>
                <div className="modal">
                    <div className="modal-background"></div>
                        <div className="modal-content">
                            register now
                        </div>
                    <button onClick={this.modalClose} className="modal-close is-large" aria-label="close"></button>
                </div> */}
            </div>
        )
    }

}