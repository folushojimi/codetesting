import Authform from "./Authform"

const Signin =()=>{
    return(
        <>
    
    <Authform
    
     fields={[
        {
        label:"Email",
        type:"text"   
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
    
        </>
    )
}

export default Signin