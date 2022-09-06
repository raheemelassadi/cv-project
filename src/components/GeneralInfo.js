import React, { useState } from "react";
import "./GeneralStyles.scss"
import ReactToPrint from "react-to-print";
import Render from "./Render";
import { useRef } from "react";

function GeneralInfo({getInfo}) {

        const [general, setGeneral] = useState({
            first: '',
            last: '',
            email: '',
            phone: ''
        });

        function handleChange(e){
            console.log(`${e.target.name} ${e.target.value}`)
            setGeneral({...general,[e.target.name]: e.target.value});
        };

        const renderUserInfo=()=> {
            console.log(general)
           getInfo(general)
        }


        return(
            <div className="form-container">
                <h1>Personal Info</h1>
                    <div>
                        <input 
                            placeholder={'name'}
                            value={general.first}
                            name='first'
                            onChange={(e)=> { handleChange(e); renderUserInfo()}}
                        />
                        <input 
                            placeholder={"last"}
                            value={general.last}
                            name="last"
                            onChange={(e)=> { handleChange(e); renderUserInfo()}}
                        />
                        <div className="contact-info">
                            <input 
                                placeholder={"email"} 
                                type="email"
                                value={general.email}
                                name="email"
                                onChange={(e)=> { handleChange(e); renderUserInfo()}}
                            />
                            <input 
                                placeholder={"phone"} 
                                type="tel"
                                value={general.phone}
                                name="phone"
                                onChange={(e)=> { handleChange(e); renderUserInfo()}}
                            />
                        </div>

            
                    {/* <button className="render-btn" onClick={renderUserInfo}>Submit</button> */}
            


          {/* <ReactToPrint 
      trigger={() => {
        return <div className="render-container"><button className="btn"><Render renderUserInfo={renderUserInfo}/></button></div>
      }}

      content = {() => componentRef} 
      documentTitle="Resume"
      pageStyle= 'print'

    />   */}
      
                    </div>

            </div>
        )

}

export default GeneralInfo