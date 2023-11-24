import React ,{ useContext , useState }from 'react'
import Contextval from '../Content/Conapi';


function Login() {

    const [userVal , setUserVal ] = useState("");

const [pass, setPassword] = useState("")

const {setUser} = useContext(Contextval );

    const Handler = (e)=> {

  e.preventDefault()
  // YE JO SET USER HAI BHAI WO  CONTEXT FOLDER  KE ANDHAR KE JSX KA STATE HAI 
  
    // TO GET OR TO ADD DATA TO CONTEXT API
  setUser({userVal,pass})
    }

  return (

    <div>
    <h2>Login</h2>
    <input type='text'

    placeholder='username'  value={userVal} onChange={(e)=>{setUserVal(e.target.value)}}  />
    {" "}
    <input type='text' 
    
    placeholder='password' value={pass}    onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={Handler}>Submit</button>
</div>
  )
}

export default Login