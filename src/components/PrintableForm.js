import React, { Component } from "react";

class PrintableForm extends Component{
   

    render(){
        return(
            <div >
                <div className="print-header">
                    <h1>{this.props.userInfo.first}</h1>
                    <h3>{this.props.userInfo.last}</h3>
                    <h3>{this.props.expInfo?.company}</h3>
                    <h3>{this.props.expInfo?.position}</h3>
                </div>
            </div>
        )
    }
}

export default PrintableForm;