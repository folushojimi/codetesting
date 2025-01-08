const Authform = ({fields})=>{
    return(
    <>
    <form>
       {
       fields.map((field)=>{

        <div key={field.id}>
            
        <label htmlFor={field.label}>
            {fields.label}
        </label>

        <input
         type={fields}
         value={}
         onChange={}
        />
        </div>
       })
       }
    </form>
    </>
    )
}

export default Authform 