import React, { Component } from "react";
import './Experience.scss'
import InputMaker from "./InputMaker";

class Experience extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Work Experience <img src="../images/add.png" alt="plus sign"/></h1>
                </div>
                <div className="experience-form">
                    <InputMaker type={'text'} placeholder={"Company"}/>
                    <InputMaker type={'text'} placeholder={"Position"}/>
                    <InputMaker type={'text'} placeholder={"Start Date"}/>
                    <InputMaker type={'text'} placeholder={"End Date"}/>
                </div>
            </div>
        )
    }
}

export default Experience