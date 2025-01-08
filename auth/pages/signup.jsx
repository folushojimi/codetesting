import { Link } from "react-router-dom"
import Authform from "./Authform"

const Signup =()=>{
    return(
        <>
<Authform
fields={[
  {
    label:"First Name", 
    type:"text"
  },
  {
    label:"Last Name", 
    type:"text"
  },
  {
     label:"Password", 
    type:"password"
  },
  {
    label:"Confirm Password",
    type:"password"
  }
  
  ]}

  submitButton="Signup"

/>

<Link to="/">already have an account</Link>
        </>
    )
}

export default Signup