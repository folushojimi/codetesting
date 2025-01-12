import { Link } from "react-router-dom"
import Authform from "./Authform"
import { useState } from "react"
import * as userService from "../../services/user"

const Signup =()=>{

  const [error, setError]=useState('')

    return(
        <>

<div style={{color:'red', marginLeft:'100px'}}>
  {error}
</div>
<Authform
fields={[
  // {
  //   label:"first name", 
  //   type:"text"
  // },
  // {
  //   label:"last name", 
  //   type:"text"
  // },
  {
    label:"username",
    type:"text"
  },
  {
     label:"password", 
    type:"password"
  },
  {
    label:"confirm password",
    type:"password"
  }
  
  ]}

  submitButton="Signup"
  onSubmit={async (values)=>{
    if(values.username.length < 4 ){
      setError('username too short')
       return;
    }

    if(values.password.length < 4){
      setError("password too short")
    return;
    }


    if(values.password != values["confirm password"]){
      setError("password does not match")
      return;
    }

const response = await userService.createUsers({
username: values.username,
password: values.password
})


// conditions to know if user is created or an error handler that shows users already existed
if (response.status === 201){
  console.log('user created')
}else{
const data = await response.json()
console.log(data.error)
}

// console.log(response.status)

  }}

/>

<Link to="/">already have an account</Link>
        </>
    )
}

export default Signup