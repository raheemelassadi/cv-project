import React, { Component } from "react";
import './Skills.scss'

class Skills extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="form-container">
                <h1>Skills</h1>
                {/* <span className="plus-sign"><img src="../images/add.png" alt="plus sign"/></span> */}
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