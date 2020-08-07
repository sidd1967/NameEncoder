import React, {Component} from 'react';
import CodeToFirstname from "../CodeToFirstName.PNG"
import CodeToSurname from "../CodeToSurname.PNG"
import FirstnameToCode from "../FirstnameToCode.PNG"
import SurnameToCode from "../SurnameToCode.PNG"
import IndexFiletoName from "../indexFileToNames.PNG"
import NameFiletoIndex from "../nameFiletoIndex.PNG"
import { Link, animateScroll as scroll } from "react-scroll";

import '../WebServiceDemo.css'



export default  class Webservice extends Component {
  
  render(){
      return (

          <div className="form">
      <div>
      <br/>
     
          <h3> Welcome to Webservice Demo </h3>
          Please click the link below to view, test, validate the Name Encoder API using Swagger UI:
          <br/><br/>
          <a href="https://name-encoder.herokuapp.com/api-docs/" target="_blank">Visit Swagger</a>
          <br/><br/>
          The Swagger UI for Name Encoder is developed to demonstrate the API Structure and to validate the API Requests.
         
         <br/><br/>
         
         <div className="subtitle1">WEB SERVICE INSTRUCTIONS</div>
     
          <div className="subtitle">Webservice for Retrieving Soundex Code for given Names</div>
          <div className ="normaltext">Webservice Request Body and the Expected Response is shown in the Image</div>
          <div className ="normaltextul">For Surname:</div>
          
          <div className= "Link"> Webservice Link: http://localhost:4000/names/get/sname</div>
          <img src = {SurnameToCode} className = "center2" alt="Soundex Project" />
          
          
          <div className= "normaltextul">For Firstname:</div>
          <div className= "Link">Webservice Link: http://localhost:4000/names/get/fname</div>
          <img src = {FirstnameToCode} className = "center2" alt="Soundex Project" />
          <br/>
          

          

          <div className="subtitle">Webservice for Retrieving Names for given codes</div>
          <div className ="normaltext">Webservice Request Body and the Expected Response is shown in the Image</div>

          <div className= "normaltextul">For Surname Code:</div>
          <div className= "Link">Webservice Link: http://localhost:4000/names/get/snamecode</div>
          <img src = {CodeToSurname} className = "center2" alt="Soundex Project" />
          
          
          <div className= "normaltextul">For Firstname Code:</div>          
          <div className= "Link"> Webservice Link: http://localhost:4000/names/get/fnamecode</div>
          <img src = {CodeToFirstname} className = "center2" alt="Soundex Project" /> 
          <br/>
          <div className="subtitle">Webservice for Retrieving List of Names for given List of codes</div>
          <div className ="normaltext">Webservice Request Body and the Expected Response is shown in the Image</div>
          <div className= "Link"> Webservice Link: https://name-encoder.herokuapp.com/names/fileget/filecodes</div>
          <img src = {IndexFiletoName} className = "center2" alt="Soundex Project" />
          <br/>
          <div className="subtitle">Webservice for fetching List of Indexes for a given List of Names</div>
          <div className ="normaltext">Webservice Request Body and the Expected Response is shown in the Image</div>
          <div className= "Link"> Webservice Link: https://name-encoder.herokuapp.com/codes/fileget/filenames</div>
          <img src = {NameFiletoIndex} className = "center2" alt="Soundex Project" />     
            
         
          <br/>
          <br/>
          <br/>

              </div>
          </div>
          


    )
  }
}
