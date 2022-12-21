import React from  "react";
import {Authstore} from './Authstore'
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [username , setusername] = React.useState("")
    const [password , setpassword] = React.useState("")
    const navigate = useNavigate();

    const [data ,  setdata] =React.useState([])

    const loginhandler = () =>{
        setdata([...data , {
            username:username,
            password:password
        }])

        console.log(Authstore.gototodo())
        console.log(Authstore)
        console.log(data)
        navigate('/todos')


    }

    return(
        <>
        <h1>Login</h1>
        <input type="text" placeholder='userrname' onChange={(e)=>{setusername(e.target.value)}} value={username}/>
        <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
        <button  onClick={loginhandler}>Add</button>
        </>
    )
}

export default Login;