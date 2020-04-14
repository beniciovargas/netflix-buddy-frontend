import React from 'react';
import hero from '../../images/hero.jpg';


export default class Homepage extends React.Component{



    render(){

        return(
            <div>
                <img src={hero} alt='someone watching netflix' />
            </div>
        )
    }

}