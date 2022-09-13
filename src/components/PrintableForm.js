import React, { Component } from "react";

class PrintableForm extends Component{
   

    render(){
        return(
            <div >
                <div className="print-header">
                    <div className="general">
                        <h1>{this.props.userInfo.first} {this.props.userInfo.last}</h1>
                        <h3>{this.props.userInfo.email}{this.props.userInfo.phone}</h3>
                    </div>
                    <div className="work">
                        <h1>Work Experience</h1>
                        <h3>{this.props.expInfo?.position} for {this.props.expInfo?.company}</h3>
                        <h3></h3>
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