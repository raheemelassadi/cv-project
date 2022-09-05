import React, { Component } from "react";
import "./Form.scss"
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";


class Form extends Component{
    render(){
        return(
            <form>
                <GeneralInfo 
                    first={'First Name'}
                    last={'Last Name'}
                    email={'Email'}
                    phone={'Phone'}
                    emailType={'email'}
                    phoneType={'tel'}
                />
                <Experience />
                <Education />
            </form>
        )
    }
}

export default Form