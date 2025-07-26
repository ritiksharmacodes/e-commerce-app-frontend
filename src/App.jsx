import { useState } from 'react'
import { Navbar } from './components'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";

import ProductDisplayPage from './pages/ProductDisplayPage.jsx';
import FirstLayout from './components/layouts/FirstLayout.jsx';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<FirstLayout />}>
    <Route index element={<HomePage />} />
    <Route path='*' />
  </Route>

));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
