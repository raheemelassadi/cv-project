import React from "react";
import { useRef } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.scss"
import ReactToPrint from "react-to-print";
import Render from "./components/Render";
import PrintableForm from "./components/PrintableForm";
import GeneralInfo from "./components/GeneralInfo";

function App (){


  let componentRef = useRef();

  return(
    <>
    <div>
      <Header />
    </div>
    <div>
      <Form />
      <div style={{ display: "none" }}>
        <PrintableForm ref={(el) => (componentRef = el)} name={'jake'} last={'elber'}/>
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
