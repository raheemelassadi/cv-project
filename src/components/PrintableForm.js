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
                    <div className="work">
                        <h1>Work Experience</h1>
                        <h3>{this.props.expInfo?.position} for {this.props.expInfo?.company}</h3>
                        <h3>Start Date {this.props.expInfo?.startDate} End Date {this.props.expInfo?.endDate}</h3>
                    </div>
                    <div className="education">
                        <h1>Education</h1>
                        <h3></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrintableForm;