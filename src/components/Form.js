import React, { Component } from "react";
import "./Form.scss"

class Form extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="form-container">
                <form>
                    <label htmlFor="first">First Name</label>
                    <input id="first" type='text'/>
                </form>
            </div>
        )
    }
}

export default Form