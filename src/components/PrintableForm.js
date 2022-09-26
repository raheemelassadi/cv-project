import React, { Component } from "react";
import "./printableForm.scss" 

class PrintableForm extends Component{
    render(){
        return(
            <div >
                <div className="print-header">
                    <div className="general">
                        <h1 className="name">{this.props.userInfo.first} {this.props.userInfo.last}</h1>
                        <div className="sub-general">
                            <h3>{this.props.userInfo.email}</h3>
                            <h3 id="phone">{this.props.userInfo.phone}</h3>
                        </div>
                    </div>
                    <div className="work section">
                        <h1 className="section-title">Work Experience</h1>
                        <h3>{this.props.expInfo?.position} for {this.props.expInfo?.company}</h3>
                        <h3>Start Date {this.props.expInfo?.startDate} End Date {this.props.expInfo?.endDate}</h3>
                    </div>
                    <div className="education section">
                        <h1 className="section-title">Education</h1>
                        <h3>Attended {this.props.educationInfo?.school}</h3>
                        <h3>Degree of {this.props.educationInfo.degree}</h3>
                        <h3>Start Date {this.props.educationInfo?.startDate} End Date {this.props.educationInfo?.endDate}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrintableForm;