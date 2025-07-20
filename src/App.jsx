import { useState } from 'react'
import { Navbar } from './components'
import { useEffect } from 'react'

const addressOfTheServer = 'http://localhost:5050';

function App() {
  

  return (
    <>
      {/* <h1 className='bg-amber-500 text-white text-center'>Ram</h1> */}
      <Navbar />
    </>
  )
}

export default App
