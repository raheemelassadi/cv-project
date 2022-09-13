import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";


class Form extends Component{
    render(){
        return(
            <form>
                <GeneralInfo />
                <Experience />
                <Education />
                
            </form>
        )
    }
}

export default Form