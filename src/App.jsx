import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "../auth/pages/signin"
import Signup from "../auth/pages/signup"

function App() {
  return (
<BrowserRouter>
<>

</>

<Routes>
<Route path="/" element={<Signin/>}/>
<Route path="/signup" element={<Signup/>}/>
</Routes>

</BrowserRouter>
  )
}

export default App
