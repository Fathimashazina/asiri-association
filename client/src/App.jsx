import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"

export default function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/abount" element={<About/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/products" element={<Products/>}/>
</Routes>
</BrowserRouter>
  )
}