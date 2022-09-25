import React, { useState } from "react";
import './Education.scss'


function Education({getEducationInfo}){

    const [education, setEducation] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    });


    function handleChange(e){
        setEducation({...education,[e.target.name]: e.target.value});
    };

    const renderUserInfo=()=> {
       getEducationInfo(education)
    }

        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Education</h1>
                </div>
                <div className="experience-form">
                    <input 
                        type='text' 
                        placeholder="School" 
                        value={education.school}
                        name='school'
                        onChange={(e)=> {handleChange(e); renderUserInfo()}}
                    />
                    <input 
                        type='text' 
                        placeholder="Degree"
                        value={education.degree}
                        name='degree'
                        onChange={(e)=> {handleChange(e); renderUserInfo()}}
                    />
                    <input type='text' placeholder="Start Date" value={education.startDate} name="startDate"
                        onChange={(e)=> {handleChange(e); renderUserInfo()}}/>
                    <input type='text' placeholder="End Date" value={education.endDate} name="endDate"
                            onChange={(e)=> {handleChange(e); renderUserInfo()}}/>
                </div>
            </div>
        )
}

export default Education