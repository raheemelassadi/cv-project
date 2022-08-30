import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";


class Form extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <form>
                <GeneralInfo />
                <Experience />
                <Education />
                <Skills />
            </form>
        )
    }
}

export default Form