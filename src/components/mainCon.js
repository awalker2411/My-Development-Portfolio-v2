import TopNav from "./navbar"
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function MainCon(){
    return(
        <>
            <TopNav />
            <Outlet/>
            <Footer/>
        </>
    )
}