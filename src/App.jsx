import { useState } from 'react'
import { Navbar } from './components'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";

import ProductDisplayPage from './pages/ProductDisplayPage.jsx';
import FirstLayout from './components/layouts/FirstLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import SignIn from "./pages/signin/SignIn.jsx";

const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path='/' element={<FirstLayout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path='/signin' element={<SignIn />} />
    <Route path='*' />
  </Route>

));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
