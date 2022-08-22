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
                    <div>
                    <label htmlFor="first">First Name:</label>
                    <input id="first" type='text'/>
                    <label htmlFor="last">Last Name:</label>
                    <input id="last" type='text'/>
                    <div className="contact-info">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type='email'/>
                        <label htmlFor="phone">Phone Number:</label>
                        <input id="phone" type='tel'/>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form