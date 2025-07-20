import { useState } from 'react'
import { Navbar } from './components'
import { useEffect } from 'react'

const addressOfTheServer = 'http://localhost:5050';

function App() {
  useEffect(() => {
    fetch(`${addressOfTheServer}/api/v1/products/99999`).then((res) => res.json()).then((result) => console.log(result[0].extra_details_object["Camera And Display Features"]));
  }, []);

  return (
    <>
      {/* <h1 className='bg-amber-500 text-white text-center'>Ram</h1> */}
      <Navbar />
    </>
  )
}

export default App
