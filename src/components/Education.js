import React, { Component } from "react";
import './Education.scss'

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
                <form className="experience-form">
                    <input type='text' placeholder="School"/>
                    <input type='text' placeholder="Degree"/>
                    <input type='text' placeholder="Start Date"/>
                    <input type='text' placeholder="End Date"/>
                </form>
            </div>
        )
    }
}

export default Education