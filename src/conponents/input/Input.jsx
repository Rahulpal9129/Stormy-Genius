import React, { useState } from 'react'
import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { appContext } from '../../Context/Context'

const Input = () => {
  const {search, setSearch , filterData}=useContext(appContext)

       
     

  return (
    <>
                  <div className='main-search'>
                   
                        <input  className='Search-bar' type="text" value={search}   placeholder='Search your career path here........................ !' onChange={(e)=>setSearch(e.target.value)}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'  />
                       

                    

                    </div>

                    
    </>
  )
}

export default Input