import React, { Component } from "react";
import './Render.scss'

class Render extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="render-container">
                <button className="render-btn">Render</button>
            </div>
        )
    }
}

export default Render