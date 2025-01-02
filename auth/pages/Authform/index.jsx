import { useState } from "react"


const Authform =({fields, submitButton})=>{

const[values, SetValues]=useState(()=>{
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
     {
      fields.map((field)=><div key={field.label}> 
         <label htmlFor={field.label}>{field.label}</label>

         <input 
         id={field.label}
         type={field.type} 
         value={values[fields.label]}
         onChange={e=>
             {SetValues({ ...values, [field.label]: e.target.value});
        }}
          
          />
      </div>)
     }

    </>
    )

}

export default Authform