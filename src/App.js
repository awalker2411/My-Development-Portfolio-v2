import MainCon from "./components/mainCon";
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import AboutMe from "./components/pages/about";
import Contact from "./components/pages/contact"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainCon/>}>
    <Route index element={<AboutMe/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Route>
))

export default function App(){
  return(
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
