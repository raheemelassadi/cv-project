import React, { useState } from "react";
import './Experience.scss'

function Experience ({getExperienceInfo}){

    const [general, setGeneral] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: ''
    });

    function handleChange(e){
        setGeneral({...general,[e.target.name]: e.target.value});
    };

    const renderUserInfo=()=> {
       getExperienceInfo(general)
    }

    
        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Work Experience</h1>
                </div>
                <div className="experience-form">
                    <input type='text' placeholder="Company" value={general.company} name="company"
                            onChange={(e)=> {handleChange(e); renderUserInfo()}}/>
                    <input type='text' placeholder="Position" value={general.position} name="position"
                           onChange={(e)=> {handleChange(e); renderUserInfo()}} />
                    <input type='text' placeholder="Start Date" value={general.startDate} name="startDate"
                           onChange={(e)=> {handleChange(e); renderUserInfo()}} />
                    <input type='text' placeholder="End Date" value={general.endDate} name="endDate"
                            onChange={(e)=> {handleChange(e); renderUserInfo()}}/>
                </div>
            </div>
        )
    
}

export default Experience