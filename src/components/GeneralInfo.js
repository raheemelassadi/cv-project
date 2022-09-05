import React from "react";
import "./GeneralStyles.scss"

function GeneralInfo(props) {

        return(
            <div className="form-container">
                <h1>Personal Info</h1>
                    <div>
                        <input placeholder={props.first}/>
                        <input placeholder={props.last}/>
                        <div className="contact-info">
                            <input placeholder={props.email} type={props.emailType}/>
                            <input placeholder={props.phone} type={props.phoneType}/>
                        </div>
                    </div>
            </div>
        )

}

export default GeneralInfo