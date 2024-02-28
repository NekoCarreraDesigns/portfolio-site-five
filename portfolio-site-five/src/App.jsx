import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Projects from "./pages/Projects/Projects"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </>
  )
}

export default App
