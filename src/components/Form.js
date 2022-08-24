import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Experience from "./Experience";

class Form extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
                <GeneralInfo />
                <Experience />
                <Skills />
            </>
        )
    }
}

export default Form