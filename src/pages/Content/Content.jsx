import React from 'react'

import "./Content.css"
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { appContext } from '../../Context/Context'
 
const Content = () => {
  const {filterData}=useContext(appContext);
  return (
      <>
           
         <div className="main-card">
          
       {
        filterData.map((item)=>(
             
                 <div className='Contain-card' key={item.id}>
                         <div className="card-text">
                          <h1>{item.Heading}</h1> 
                          <p>{item.Post_About}</p>
                            <Link className='btn' to={`/ContentDetail/${item.id}`}>Read more...</Link>
                          </div>
                          <img src={item.Img}/>
                          {/* <p>{item.Future_Career}</p>
                          <p>{item.Salary}</p>
                          <p>{item.Numbers_Vaccancy}</p>
                          <p>{item.Important_Of_Skills}</p>
                          <p>{item.Challenge}</p>
                          <p>{item.Educational_Qualification}</p>
                          <p>{item.Where_to_apply_from}</p>
                          <p>{item.Any_Other_Query_Helpline_Number}</p> */}

                          
                 </div>

                 
        ))
       }
        </div>
      </>
  )
}

export default Content