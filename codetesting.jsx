import { useState } from "react"

const CodeTesting =()=> {
    const [values, SetValues]=useState('')
    return(
        <>
<div>
    <p>{values}</p>
</div>

<input 
 type="text"
 value={values} 
 onChange={e=> {SetValues(e.target.value)}}
 />
 
        </>
    )
}

export default CodeTesting