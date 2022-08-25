import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Render from "./Render";

class Form extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
                <GeneralInfo />
                <Experience />
                <Education />
                <Skills />
                <Render />
            </>
        )
    }
}

export default Form