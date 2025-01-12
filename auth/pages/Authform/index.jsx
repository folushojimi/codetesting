import { useState } from "react"

const Authform = ({fields,submitButton, onSubmit})=>{

const[values, setValues]=useState(()=> {
    const valueContainer = {};

    for(let field of fields){
        valueContainer[field.label]= "";
    }

    return valueContainer

})

 console.log(values)

// setting up the spinning loader that rotates whenever we clicked on submit
const[loading, setloading]=useState(false)

    return(  
    <>
    <form
    onSubmit={async (e)=>{
       e.preventDefault();
       setloading(true)
       await onSubmit(values)
       setloading(false)
    }}
    >
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
 
       <button style={{padding:"5px", width:"120px", marginTop:"10px",}}>
        {submitButton}
         {loading && <span style={{marginLeft:"5px", animation:"spin"}}>()</span>}
       </button>
    </form>
    
    </>
    )

}

export default Authform 

