import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.scss"

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
      </div>
      </>
    )
  }
}

export default App;
