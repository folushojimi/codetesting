import Authform from "../auth/pages/Authform"

const JustTesting =()=>{
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
/>
        </>
    )
}

export default JustTesting