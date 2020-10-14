import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
function AboutPage(props) {
    return (
        <div>
            <Hero title= {props.title}/>
            <Content>
            <p>Hello, my name is Faiza. I'm a full stack engineer with experience in Angular, AngularJS, Node JS, MongoDB, and React.</p>

<p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

<p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

<p>My latest project, Covid-19 Tracker, is a tracker for common users to see overall covid cases around the world. You can check it out <a href='https://covid-19updateapp.tk' target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with React, HTML, and CSS. However, I will be rebuilding it using Angular in the coming months</p>

            </Content>
        </div>
    )
}

export default AboutPage
