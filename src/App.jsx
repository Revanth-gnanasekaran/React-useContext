import { useState } from 'react'
import './App.css'
import Card from './Components/card'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> <><div className="fixed-top">
    <Navbar/>
    <Header />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center cardcss">
    <card  />
    </div>
    <Footer/>
  </></>
  )
}

export default App;
