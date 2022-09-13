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
                    <h3>{this.props.expInfo?.company}</h3>
                    <h3>{this.props.expInfo?.position}</h3>
                </div>
            </div>
        )
    }
}

export default PrintableForm;