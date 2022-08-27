import React, { Component } from "react";
import './Education.scss'
import InputMaker from "./InputMaker";

class Education extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Education <img src="../images/add.png" alt="plus sign"/></h1>
                </div>
                <div className="experience-form">
                    <InputMaker type={'text'} placeholder={"School"}/>
                    <InputMaker type={'text'} placeholder={"Degree"}/>
                    <InputMaker type={'text'} placeholder={"Start Date"}/>
                    <InputMaker type={'text'} placeholder={"End Date"}/>
                </div>
            </div>
        )
    }
}

export default Education