import React, { Component } from "react";

class GeneralInfo extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="form-container">
                <h1>Personal Info</h1>
                <form>
                    <div>
                        <input id="first" type='text' placeholder="First Name"/>
                        <input id="last" type='text' placeholder="Last Name"/>
                        <div className="contact-info">
                            <input id="email" type='email' placeholder="Email"/>
                            <input id="phone" type='tel' placeholder="Phone Number"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default GeneralInfo