import "./index.css"
import About from "./Components/About/About"
import CardOne from "./Components/CardOne/CardOne"
import Navbar from "./Components/Navbar/Navbar"
import About2 from "./Components/About2/About2"
import Imagecompo from "./Components/Imagecompo"
import Shop from "./Components/SHOP/shop"
import Header from "./Components/Header/Header"
import Park from "./Components/Park/Park"
import Shows from "./Components/Shows/Shows"
import Footer from "./Components/Footer/Footer"
import More from "./Components/More/More"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Disney from "./Components/Navbar/Disney"

import Movies from "./Components/Navbar/Movies"



function App() {
  

  return (
    <div className="container">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/disney" element={<Disney/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/shows" element={<Shows/>}></Route>
          <Route path="/park" element={<Park/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <div>
      <About />
      <div className="card">
        <CardOne />
      </div>

      <div style={{backgroundColor:" rgb(4, 4, 136)",textAlign:"center",color:"white",padding:"10px",width:'100%'}}>
      <Header head="Whats on Disney+"/>
      <div className="cardtwo">
        

        <About2 
         />
        </div>
        <Imagecompo />
        </div>
        <div >
        
        <Shop />
        </div>

       <div>
        
        
        </div>

        
            
          <div >
          <Shows />
          
          </div>
        

        
        
        <div >
         <Park />
          
        </div>
        

        <div>
          <Header head="More From Disney"/>  
          <div className="display">
          <More />
          
          </div>

        </div>

        <Footer/>
    </div>
    </div>
  )
}

export default App
