import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.scss"
import ReactToPrint from "react-to-print";

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <>
      <ReactToPrint 
        trigger={() => {

          return <button> print me</button>
        }}

        content = {() => this.componentRef} 
        documentTitle="CV"
        pageStyle= 'print'

      /> 


      <div>
        <Header />
      </div>
      <div>
        <Form ref={el => (this.componentRef =  el)} style={{padding: 100}}/>
      </div>
      </>
    )
  }
}

export default App;
