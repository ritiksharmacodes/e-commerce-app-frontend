import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"; 


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/'>
      <Route index element={<Homepage />} />
    </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App