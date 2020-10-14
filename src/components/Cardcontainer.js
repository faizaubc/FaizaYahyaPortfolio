import React, { Component } from 'react'
import blog from '../assets/images/blog.jpg'
import  corona from '../assets/images/corona.jpg'
import motorcycle from '../assets/images/motorcycle.jpg'
import  panda from '../assets/images/panda.jpg'
import  puzzle from '../assets/images/puzzle.jpg'
import  recipe from '../assets/images/recipe.jpg'
import  todolist from '../assets/images/todolist.jpg'
import  todolist2 from '../assets/images/todolist2.jpg'
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Cardcontainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Faiza Yahya Blog',
                    subTitle: 'The blog describing my life journey',
                    imgSrc: blog,
                    link: 'https://faizayahya.tk',
                    selected: false,
                    language: 'JavaScript, CSS, HTML',
                    github : ''
                

                },
                {
                    id: 1,
                    title:  'Covid Tracker',
                    subTitle: 'Helps track the current covid cases, \ndeaths and recovery',
                    imgSrc: corona,
                    link: 'https://covid-19updateapp.tk',
                    selected: false,
                    language: 'ReactJS, JavaScript, CSS, HTML',
                    github: 'https://github.com/faizaubc/CoronaTracker'

                },
                {
                    id: 2,
                    title:  'Dynamic Recipe',
                    subTitle: 'Recipe made with ReactJS. \nFetches the data using \nHttp protocol.',
                    imgSrc: recipe,
                    link: 'https://dynamicrecipe.tk',
                    selected: false,
                    language: 'ReactJS, CSS, HTML',
                    github: 'https://github.com/faizaubc/RecipeAngularJS'
                  
                },
                {
                    id: 3,
                    title:  'TodoList in  AngularJS',
                    subTitle: 'Simple Todo List in Angular JS',
                    imgSrc: todolist,
                    link: 'https://mytodolistjs.tk',
                    selected: false,
                    language: 'AngularJS, TypeScript, CSS, HTML',
                    github: 'https://github.com/faizaubc/TodoListAngularJS'
                  

                },
                {
                    id: 4,
                    title:  'Puzzle Game',
                    subTitle: 'Simple Puzzle Game. \nChoose the game difficulty \nthen play away !!',
                    imgSrc: puzzle,
                    link: 'https://puzzlegamefun.tk',
                    selected: false,
                    language: 'JavaScript, CSS, HTML',
                    github: 'https://github.com/faizaubc/PuzzleGameWeb'


                },
                {
                    id: 5,
                    title: 'Motorcycle Downpayment',
                    subTitle: 'Fun project with form submit option. \nLets user know if they \nare capable of purchasing a motorbike',
                    imgSrc: motorcycle,
                    link: 'https://downpaymentmotorbike.tk',
                    selected: false,
                    language: 'JavaScript, CSS, HTML',
                    github: ''

                },
                {
                    id: 6,
                    title:  'Bears Slideshow',
                    subTitle: 'Simple Slideshow of Animals',
                    imgSrc: panda,
                    link: 'http://slideshowanimals.s3-website.ca-central-1.amazonaws.com',
                    selected: false,
                    language: 'JavaScript, CSS, HTML',
                    github: ''

                },
                {
                    id: 7,
                    title:  'Practice List in AngularJS',
                    subTitle: 'Simple list in Angular with \nNavigation to multiple pages',
                    imgSrc: todolist2,
                    link: 'https://todolistangular.tk',
                    selected: false,
                    language: 'AngularJS, CSS, HTML',
                    github: 'https://github.com/faizaubc/AngularJSList'

                },
            ]
             
        }
    }
    handleCardClick = (id, card)=>{
        console.log(id);
        let items= [...this.state.items];

        items[id].selected= items[id].selected ? false: true;

        items.forEach(item =>{
            if(item.id != id)
            {
                item.selected=false;
            }
        });

        this.setState({
            items
        })   

    }

    makeItems =(items)=>{
        return items.map(item=>{
           return <Card item= {item} click= {(e=> this.handleCardClick(item.id, e))}  key= {item.id}/> 
        })
    }
    render() {
        return (
            <div>
             <Container>
                <Row className ="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
             </Container>
              
            </div>
        )
    }
}
