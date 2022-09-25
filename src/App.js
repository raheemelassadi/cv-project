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
  const [expInfo, setExpInfo]= useState({});
  const [educationInfo, setEducationInfo] = useState({})


  const getGeneralInfo=(data)=> {
    setUserInfo(data)
  }

  const getExperienceInfo=(data)=> {
    setExpInfo(data);
  }

  const getEducationInfo=(data)=> {
    setEducationInfo(data);
  }

  let componentRef = useRef();



  return(
    <>
    <div>
      <Header />
    </div>
    <div>
      <GeneralInfo getGeneralInfo={getGeneralInfo}/>
      <Experience getExperienceInfo={getExperienceInfo}/>
      <Education getEducationInfo={getEducationInfo}/>
      <div style={{display: "none"}}>
      <PrintableForm ref={(el) => (componentRef = el)} userInfo={userInfo} expInfo={expInfo} educationInfo={educationInfo}/>
      </div>
    </div>

     <ReactToPrint 
      trigger={() => {
        return <div className="render-container"><button className="btn"><Render /></button></div>
      }}

      content = {() => componentRef} 
      documentTitle="Resume"
      pageStyle= 'print'

    />  
    </>
  )
}

export default App;
