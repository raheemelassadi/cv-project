import React, { Component } from "react"; 


class PrintableForm extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div >
                <div className="print-header">
                    <h1>John Damon</h1>
                    <h3>Software Developer</h3>
                </div>
            </div>
        )
    }
}

export default PrintableForm