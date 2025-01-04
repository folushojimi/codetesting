const Fields =(label, type, value, onChange)=>{

    return(
<>
       <div> 
        
         <label htmlFor={label}>
            {label}
        </label>

         <input 
         id={label}
         type={type} 
         value={value}
         onChange={onChange}  
          />
      </div>
</>
    )
}

export default Fields