import React, { Component } from "react";
import './Skills.scss'
import InputMaker from './InputMaker'

class Skills extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="form-container">
                <div className="skills-header">
                <h1>Skills<img src="../images/add.png" alt="plus sign"/></h1>
                </div>
                <div className="skills-form">
                <ul>
                    <li><InputMaker type={'text'} placeholder={"Add Skill"}/></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Skills