import React, { useState } from "react";
import Contextval from "./Conapi";

 const UserContextProvider =({children})=>{

    const [ user,setUser ] = useState(null);

    return(

        <Contextval.Provider value={{user,setUser}}>
 
        {children}
        </Contextval.Provider>
    )
 }
 export default UserContextProvider ;