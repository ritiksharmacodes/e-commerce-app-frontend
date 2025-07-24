import { useState } from 'react'
import { Navbar } from './components'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";

import ProductDisplayPage from './pages/ProductDisplayPage.jsx';
import RootLayout from './components/layouts/rootLayout.jsx';

const addressOfTheServer = 'http://localhost:5050';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index />
    <Route path='*'  />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
