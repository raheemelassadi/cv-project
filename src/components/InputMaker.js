import React, { Component } from "react";

class InputMaker extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <input placeholder={this.props.placeholder} type={this.props.type}/>
            </>
        )
    }
}

export default InputMaker