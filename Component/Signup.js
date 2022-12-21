import React from  "react"
import {Authstore} from './Authstore'
import { useNavigate } from 'react-router-dom';
const Signup = () =>{
    const [username , setusername] = React.useState("")
    const [password , setpassword] = React.useState("")

    const [data ,  setdata] =React.useState([])

        const navigate = useNavigate();

    const Signuphandler =  () =>{
    

        console.log(Authstore.gotosignin())
        console.log(Authstore)
        navigate('/login')
    }

    return(
        <>
        <h1>Signup</h1>
        <input type="text" placeholder='userrname' onChange={(e)=>{setusername(e.target.value)}} value={username}/>
        <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
        <button  onClick={Signuphandler}>Add</button>
        </>
    )
}

export default Signup;