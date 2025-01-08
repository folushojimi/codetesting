import { useState } from "react"

const Authform = ({fields, submitButton})=>{

const[value, setValues]=useState(()=>{
    const valueContainer ={}
    for(let field of fields){
        valueContainer[field]
    }
})

console.log(value)


    return(
    <>
    <form>
       {
       fields.map((field)=><div key={field.id}>

        <label htmlFor={field.label}>
            {field.label}
        </label>

        <input
         type={field.type}
         id={field.id}
        />
        </div>
       )
       }

       <button>
        {submitButton}
       </button>
    </form>
    
    </>
    )
}

export default Authform 