import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.scss"
import ReactToPrint from "react-to-print";
import Render from "./components/Render";
import PrintableForm from "./PrintableForm"



class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <>
      <div>
        <Header />
      </div>
      <div>
        <Form />
        <PrintableForm ref={el => (this.componentRef =  el)}/>
      </div>
      <ReactToPrint 
        trigger={() => {

          return <div className="render-container"><button className="btn"><Render /></button></div>
        }}

        content = {() => this.componentRef} 
        documentTitle="CV"
        pageStyle= 'print'

      /> 
      </>
    )
  }
}

export default App;
