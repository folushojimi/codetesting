import { Link } from "react-router-dom"
import Authform from "./Authform"

const Signin =()=>{
    return(
        <>
    
    <Authform
    
     fields={[
        {
        label:"Email",
        type:"email" 
        },
        {
        label:"Username",
        type:"text"
        },
        {
        label:"Password",
        type:"password"  
        }
     ]}
    

     submitButton="sign in"
    />
    
    <Link to="/signup">create an account</Link>
        </>
    )
}

export default Signin