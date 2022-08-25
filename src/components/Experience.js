import React, { Component } from "react";
import './Experience.scss'

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
                <form className="experience-form">
                    <input type='text' placeholder="Company"/>
                    <input type='text' placeholder="Position"/>
                    <input type='text' placeholder="Start Date"/>
                    <input type='text' placeholder="End Date"/>
                </form>
            </div>
        )
    }
}

export default Experience