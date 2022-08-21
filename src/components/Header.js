import React, { Component } from "react";
import "./Header.scss"

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="header">
                <h1>Res-<span className="render-text">Render</span></h1><span className="horizontal-shake"><img src="../images/back.png" alt="left facing arrow"/>Click Here</span>
            </div>
        )
    }
}

export default Header
