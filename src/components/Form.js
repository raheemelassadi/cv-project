import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";

class Form extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
                <GeneralInfo />
                <Skills />
            </>
        )
    }
}

export default Form