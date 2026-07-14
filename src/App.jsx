import Navbar from "./layouts/Navbar"
import {Hero} from '@/sections/Hero'
import {Projects} from "./sections/Projects"
import{ TechStack } from "@/sections/TechStack"
import {Contact} from "./sections/Contact"
import {About} from "./sections/About"
import {Journey} from "./sections/Experience"
import { Footer } from "./layouts/Footer"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <Projects/>
        <Journey/>
        <TechStack/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App