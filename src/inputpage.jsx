import Authform from "../auth/pages/Authform"

const Inputpage =()=>{
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
  },{
    label:"Home Address", 
    type:"text"
  },
  {
     label:"Password", 
    type:"password"
  }
  
  ]}

  submitButton="Signup or Signin"

/>
        </>
    )
}

export default Inputpage