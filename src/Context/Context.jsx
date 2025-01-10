import React from 'react'
import { createContext, useState } from 'react'
import data from '../../public/data/data';


export const appContext=createContext();

 export const ContextProvider = ({children}) => {
    // const [state, setState] = useState(data);



    const  [search, setSearch] = useState("");
   

    const filterData=data.filter((product)=>
      product.Heading.toLowerCase().includes(search.toLowerCase())
    
    );
  return (
   
      <appContext.Provider value={{search, setSearch, filterData}}>
        {children}
      </appContext.Provider>

  )
}

