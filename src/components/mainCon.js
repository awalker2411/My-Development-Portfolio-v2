import AboutMe from './pages/about'
import TopNav from "./navbar"
import ContactMe from './pages/contact'
import Footer from './footer'

export default function MainCon(){
    return(
        <>
            <TopNav />
            <AboutMe />
            <ContactMe />
            <Footer/>
        </>
    )
}