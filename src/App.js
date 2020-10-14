import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import Footer from './components/Footer';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import ProjectReport from './pages/ProjectReport';
import HomeSecurity from './pages/HomeSecurity';
import PowerMeter from './pages/PowerMeter';


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       title: 'Faiza Yahya',
       headerLinks:[
         {title:'Home', path: '/'},
         {title:'About', path: '/about'},
         {title:'Contact', path: '/contact'},
         {title:'Project Reports', path: '/project-reports'}


       ],
       home: {
         title: 'Be Relentless',
         subtitle: 'Projects that make a difference',
         text: 'Checkout my projects below by clicking on the images'
       },
       about: {
        title: 'About Me'
   
      },
      contact: {
        title: 'Let\'s Talk'
      },
      project: {

        title: 'Project Reports',
        subtitle: 'Choose which project you like to view'
        


      }
    }
  }
  
  render(){
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand>Faiza Yahya</Navbar.Brand>
            <Navbar.Toggle className= "border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id= "navbar-toggle">
              <div className="ml-auto">
                <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/project-reports">Project Reports</Link>

                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render= {() => <HomePage title={this.state.home.title} 
          subtitle={this.state.home.subtitle} text={this.state.home.text}/>} ></Route>               
        <Route path="/about" exact render= {() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/contact" exact render= {() => <Contact title={this.state.contact.title}/>}/>
        <Route path="/project-reports" exact render= {() => <ProjectReport title={this.state.project.title} 
        subtitle={this.state.project.subtitle}/>}/>
        <Route path="/homesecurity" exact render= {() => <HomeSecurity title={this.state.about.title}/>}/>
        <Route path="/powermeter" exact render= {() => <PowerMeter title={this.state.about.title}/>}/>
          <Footer/>
        </Container>
      </Router>
    )

  }

}

export default App;
