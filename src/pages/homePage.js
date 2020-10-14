import React from 'react';
import Cardcontainer from '../components/Cardcontainer';
import Hero from '../components/Hero'

function HomePage(props){

    return(
        <div>
        <Hero title={props.title} subtitle= {props.subtitle} text= {props.text}/>
        <Cardcontainer/>
        </div>
        );
}

export default HomePage;