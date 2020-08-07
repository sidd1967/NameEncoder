import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from  "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import  HomePage from "./components/homepage.component";
import  EditPage from "./components/edit.component";

import  ExcelHandler from "./components/excel.reader.component";
import  FileNameFinder from "./components/file.nameFinder.component";
import  TestNameFinder from  "./components/testnamefinder";
import Webservice from "./components/api.component";
import car from "./bg.jpg";


import logo from "./univlogo.png";
import './index.css';


class App extends Component {


  render() {
      return (
       
        <Router>


         <div className= "container" >

                  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

            <a className="navbar-brand" href="https://google.com" target="_blank">
             
            </a>
            <Link to="/" className="navbar-brand"> Name Encoder</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/home" className="nav-link">Home Page </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit" className="nav-link">Code Generator </Link>
                </li>

                <li className="navbar-item">
                  <Link to="/nameFinder" className="nav-link">Name Finder </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/file" className="nav-link">File Handler </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/fileName" className="nav-link">File Name Finder </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/webservice" className="nav-link">Webservice Demo </Link>
                </li>
                
                
              </ul>
            </div>
          </nav>
                  <div className="App" >
           <div className = "App-Component">
           <div className = "App-Component">
           
<br/><br/>


           </div>
           </div>
          </div>
                  <Route exact path="/" component={HomePage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/nameFinder" component={TestNameFinder} />
          <Route path="/file" component={ExcelHandler} />
          <Route path="/fileName" component={FileNameFinder} />
          <Route path="/webservice" component={Webservice} />
          

        </div>
        <div className="footer">
        <img src = {logo}  width ="300" height="150" className="logo" alt="Soundex Project" />
          <div className="footerText"><px>POST GRADUATE UNIVERSITY PROJECT: Name Encoder Using Matheson's Look Up Tables</px> <br/>
          <rig2>Project Department: Computer Science<br/>
          Project Module: CS648<br/>Project Guide: Dr. Adam Winstanley<br/>
          Student Name: Siddhartha Ranganathan<br/>
          Email: SIDDHARTHA.RANGANATHAN.2020@mumail.ie</rig2>
          

          </div><br/>

</div>


              </Router>

    );
  }
}

export default App;
