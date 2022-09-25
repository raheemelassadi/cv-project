import React, { Component } from "react";
import './Education.scss'


class Education extends Component{

    render(){
        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Education </h1>
                </div>
                <div className="experience-form">
                    <input type='text' placeholder="School"/>
                    <input type='text' placeholder="Degree"/>
                    <input type='text' placeholder="Start Date"/>
                    <input type='text' placeholder="End Date"/>
                </div>
            </div>
        )
    }
}

export default Education