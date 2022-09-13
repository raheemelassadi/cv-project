import React, { useState } from "react";
import './Experience.scss'

function Experience ({getExperienceInfo}){

    const [general, setGeneral] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: ''
    });

    const [showExtra, setShowExtra]= useState(false);

    function handleChange(e){
        console.log(`${e.target.name} ${e.target.value}`)
        setGeneral({...general,[e.target.name]: e.target.value});
    };

    const renderUserInfo=()=> {
        console.log(general)
       getExperienceInfo(general)
    }

  const extraDetails=()=> {
        setShowExtra(true)
    }


    
        return(
            <div className="form-container">
                <div className="experience-header">
                <h1>Work Experience <img src="../images/add.png" alt="plus sign" onClick={extraDetails}/></h1>
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

                {showExtra && (
                    <>
                    <hr />
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
                </>
                )
                }

            </div>
        )
    
}

export default Experience