const Authform = ({fields, submitButton})=>{
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
         type={field.type}
         id={field.id}
        />

        </div>
       })
       }

       <button>
        {submitButton}
       </button>
    </form>
    </>
    )
}

export default Authform 