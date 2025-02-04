import { lazy } from "react"
import LazyLoad from "react-lazyload"
const Hero = lazy(()=> import("./components/Hero/Hero"))
const Services = lazy(()=> import("./components/Services/Services"))
const Portfolio = lazy(()=> import("./components/Portfolio/Portfolio"))
const Contact = lazy(()=> import("./components/Conatct/Contact"))
import { Suspense } from "react"
const App = () => {
  return (
    <div className="main-container">
    <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
        
          <Portfolio />
       {" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#contact">
            <Contact />
          </section>{" "}
        </LazyLoad>
      </Suspense>
    </div>
 
  )
}
export default App