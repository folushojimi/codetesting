import { useState } from "react"

const Authform = ({fields,submitButton})=>{

const[values, setValues]=useState(()=> {
    const valueContainer = {};
    for(let field of fields){
        valueContainer[field.label]='';
        return valueContainer
    }
})

 console.log(values)
    return(  
    <>
    <form>
       {
       fields.map((field)=>
       
        (
      <div key={field.label}>

        <label htmlFor={field.label}>
            {field.label}
        </label>

        <input  
         id={field.id}
         type={field.type}
         value={values[field.label]}
         
         onChange={e=> {
         setValues({ ...values, [field.label]: e.target.value})
        }}
        />
        
        </div>      
        )

       
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