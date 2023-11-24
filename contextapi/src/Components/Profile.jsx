import React, {useContext} from 'react'
import Contextval from '../Content/Conapi'


function Profile() {
    const {user }=useContext(Contextval )
 
    if(!user) return <div>plz login </div> 
    return <div> Welcome : {user.userVal} </div>
 
}

export default Profile