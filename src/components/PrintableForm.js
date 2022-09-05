import React, { Component } from "react";

class PrintableForm extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div >
                <div className="print-header">
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.last}</h3>
                </div>
            </div>
        )
    }
}

export default PrintableForm