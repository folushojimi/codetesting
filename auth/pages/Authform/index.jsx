import { useState } from "react"
import Fields from "./fields";
 


const Authform =({fields, submitButton})=>{

const[values, setValues]=useState(()=>{
   const initialState = {}
   for (let field of fields){
    initialState[field.label] = '';
   }

   return initialState
}
)
console.log(values)


    return(
    <>
    <form>
        {
      fields.map((field)=>
    <Fields
      key={field.label}
      label={field.label}
      type={field.type}
      value={values[field.label]}
      onChange={e=> {setValues({ ...values, [field.label]: e.target.value});
    }}  
    />)

     }

    <button>
     {submitButton}
    </button>
    
    </form>

    </>
    )

}

export default Authform