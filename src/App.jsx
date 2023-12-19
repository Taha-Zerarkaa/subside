import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"



const App = () => {
  return (
    <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
      <div className="container">
        <Routes>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/pricing" >
            <Pricing />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          
        </Routes>
      </div>
    </div>
  )
}

export default App
