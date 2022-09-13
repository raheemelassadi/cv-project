import React, { useState } from "react";
import { useRef } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.scss"
import ReactToPrint from "react-to-print";
import Render from "./components/Render";
import PrintableForm from "./components/PrintableForm";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";

function App (){

  const [userInfo, setUserInfo]= useState({});
  const [showInfo, setShowInfo]= useState(false);
  const [expInfo, setExpInfo]= useState({});


  const getInfo=(data)=> {
    setUserInfo(data)
    setShowInfo(true);
  }

  const getExperienceInfo=(data)=> {
   setExpInfo(data);
  }

  let componentRef = useRef();

  return(
    <>
    <div>
      <Header />
    </div>
    <div>
      <GeneralInfo getInfo={getInfo}/>
      <Experience getExperienceInfo={getExperienceInfo}/>
      <div style={{display: "none"}}>
      <PrintableForm ref={(el) => (componentRef = el)} userInfo={userInfo} expInfo={expInfo}/>
      </div>
    </div>

     <ReactToPrint 
      trigger={() => {
        return <div className="render-container"><button className="btn"><Render/></button></div>
      }}

      content = {() => componentRef} 
      documentTitle="Resume"
      pageStyle= 'print'

    />  
    </>
  )
}

export default App;
