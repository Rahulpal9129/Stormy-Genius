import React from 'react'
import data from '../../../public/data/data'
import { useParams } from 'react-router-dom'
import './ContentDetail.css'
const ContentDetiail = () => {
    const {id}=useParams();
    const detail=data.find((dt)=>dt.id===parseInt(id));
  return (
             <>
             
                <div iv className="Data-detail">
                      <h1>{detail.Heading}</h1>
                     <p className='paragraph'> <h3>Post-About</h3> {detail.Post_About}</p>
                      <img src={detail.Img}/>
                      <p className='paragraph1'> <h3>Future-Career </h3>{detail.Future_Career}</p>
                      <p className='paragraph2'> <h3>Salary</h3> {detail.Salary}</p>
                      <p className='paragraph3'> <h3>Numbers-of-Vaccancy</h3> {detail.Numbers_Vaccancy}</p>
                      <p className='paragraph4'> <h3>Important-Skill</h3> {detail.Important_Of_Skills}</p>
                      <p className='paragraph5'> <h3>Challenge</h3>{detail.Challenge}</p>
                      <p className='paragraph6'> <h3>Educational-Qualification</h3> {detail.Educational_Qualification}</p>
                      <p className='paragraph7'> <h3>Where to apply form?</h3>{detail.Where_to_apply_from}</p>
                      <p className='paragraph8'> <h3>Required_Money</h3>{detail.Required_Money}</p>
                      <p className='paragraph9'> <h3>Any other query helpline Number</h3> {detail.Any_Other_Query_Helpline_Number}</p>
                </div>
             
             </>
  )
}

export default ContentDetiail











