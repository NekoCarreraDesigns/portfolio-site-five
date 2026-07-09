import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./components/Contact/Contact"
import Projects from "./pages/Projects/Projects"


function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
