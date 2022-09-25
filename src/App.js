import React, { useState } from "react";
import { useRef } from "react";
import Header from "./components/Header";
import "./App.scss"
import ReactToPrint from "react-to-print";
import Render from "./components/Render";
import PrintableForm from "./components/PrintableForm";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education"

function App (){

  const [userInfo, setUserInfo]= useState({});
  const [showInfo, setShowInfo]= useState(false);
  const [expInfo, setExpInfo]= useState({});


  const getGeneralInfo=(data)=> {
    setUserInfo(data)
    setShowInfo(true);
  }

  const getExperienceInfo=(data)=> {
    setExpInfo(data);
    setShowInfo(true)
  }

  let componentRef = useRef();

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <>
    <div>
      <Header onClick={handleClick}/>
    </div>
    <div>
      <GeneralInfo getGeneralInfo={getGeneralInfo}/>
      <Experience getExperienceInfo={getExperienceInfo}/>
      <Education />
      <div style={{display: "none"}}>
      <PrintableForm ref={(el) => (componentRef = el)} userInfo={userInfo} expInfo={expInfo}/>
      </div>
    </div>

     <ReactToPrint 
      trigger={() => {
        return <div className="render-container"><button className="btn"><Render ref={ref}/></button></div>
      }}

      content = {() => componentRef} 
      documentTitle="Resume"
      pageStyle= 'print'

    />  
    </>
  )
}

export default App;
