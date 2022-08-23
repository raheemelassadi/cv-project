import React, { Component } from "react";
import './Skills.scss'

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
                <form className="skills-form">
                <ul>
                    <li><input type='text' placeholder="Add Skill"/><button type='submit'>Add</button></li>
                </ul>
                </form>
            </div>
        )
    }
}

export default Skills