import Authform from "../auth/pages/Authform"

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
  }
  
  ]}

  submitButton="Signup"

/>
        </>
    )
}

export default Signup