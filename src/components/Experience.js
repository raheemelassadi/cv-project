import React, { Component } from "react";
import './Experience.scss'

class Experience extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <div className="experience-header">
                <h1>Work Experience <img src="../images/add.png" alt="plus sign"/></h1>
                </div>
                <form className="experience-form">
                    <input type='text'/>
                </form>
            </div>
        )
    }
}

export default Experience