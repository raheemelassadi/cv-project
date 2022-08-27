import React, { Component } from "react";
import InputMaker from "./InputMaker";
import "./GeneralStyles.scss"

class GeneralInfo extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="form-container">
                <h1>Personal Info</h1>
                    <div>
                        <InputMaker placeholder={'First Name'}/>
                        <InputMaker placeholder={'Last Name'}/>
                        <div className="contact-info">
                            <InputMaker placeholder={'Email'} type={'email'}/>
                            <InputMaker placeholder={'Phone Number'} type={'tel'}/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default GeneralInfo