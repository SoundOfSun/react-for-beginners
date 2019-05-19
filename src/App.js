// we import the React library to enable the use of JSX
import React from 'react'
import './App.css'
// we import footer to be able to render an instance of it
// this is how we render children components inside parents components!
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

// We want this App "root" component to be a table of contents
// --> filled with higher components (<Header />, <Main />, <Footer/>)
function App() {
  return (
    // We cannot render two adjacent elements.
    // A workaround is to wrap them in a parent <div>
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
