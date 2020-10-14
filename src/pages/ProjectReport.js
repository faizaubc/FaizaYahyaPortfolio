import React ,{ useState } from 'react'
import Hero from '../components/Hero'
import { Document, Page ,pdfjs } from 'react-pdf';
import home from '../filesproject/home.pdf';
import ubc from '../filesproject/ubc.pdf'
import Content from '../components/Content';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'




function ProjectReport(props) {
     
  pdfjs.GlobalWorkerOptions.workerSrc =  
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
  const [numPages, setNumPages] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1); 
  
  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => { 
    event.preventDefault(); 
  }); 
    
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) { 
    setNumPages(numPages); 
    setPageNumber(1); 
  } 
  
  function changePage(offset) { 
    setPageNumber(prevPageNumber => prevPageNumber + offset); 
  } 
  
  function previousPage() { 
    changePage(-1); 
  } 
  
  function nextPage() { 
    changePage(1); 
  } 
  
  
  return ( 
    <> 
    <div className="main"> 
    <Hero title={props.title} subtitle= {props.subtitle} />
    <Content>
    <p className="title"> Home Security System (Capstone Project NAIT) </p> 

    <p>Languages used: C++, Python</p>

    <p>
    Summary:
    </p>
    <p>
Developed a home security system using Raspberry Pi and programmed it using python.
 The home security system has main station and substation. 
 The main station was designed using the Raspberry Pi and was 
 programmed to alert an alarm when there is motion is detected using camera or PIR motion sensor. 
 The substation was designed using ESP-32 microcontroller and programmed in C++.
  It detects if the door or window has been opened. Both communicate using the Bluetooth module.
  </p>
  <p>
•	Programmed the Raspberry Pi Night Vision camera in python to detect motion. The camera captures two images in small amount of time comparing the image pixel by pixel to detect a motion change
</p>
<p>
•	Implemented SMTP protocol to email the picture taken once the motion is detected using the camera to the user
</p>
<p>
•	Programmed ESP32 microcontroller in C++ to check the door or window state every 300 milliseconds. Upon a state change the Bluetooth serial protocol sends a signal over Bluetooth to the main station.
</p>
<Link  to="/homesecurity">View Home Security</Link>

    </Content>
 <br/>
 <Content>-----------------------------------------------------------------------</Content>
 <Content>
 <p className= "title">Power Meter (BC Hydro)</p>
<p>Languages: C, SQL</p>
<p>Summary:</p>
<p>
Developed a power meter for BC Hydro using Arduino Uno to get all the real time data.
 Once the data was collected, it was displayed in GUI created using Visual Basic showing the 
 voltage, current, and power factor for a three phased power meter. 
 </p>
 <p>
•	Created a GUI in VB showing all the current data for voltage, current and power factor
</p>
<p>
•	Successfully created a connection to MySQL to store all the data every five minutes and displayed the
 SQL storage in GUI.
 </p>
 <p>
•	Implemented an option for user to be able to delete the data displayed in the table at any given time
</p>
<Link  to="/powermeter">View Power Meter</Link>

    </Content>
  

      
     
        
      
      </div> 
    </> 
  ); 
  
}

export default ProjectReport
