import { AutomaticScroll } from "../components/AutomaticScroll"
import { Coments } from "../components/Coments"
import { ExampleProducts } from "../components/ExampleProducts"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { Slider } from "../components/Slider"
import { WeAre } from "../components/WeAre"

export const Home = () => {
    return <div>
        <Navbar />
        <Header />
        <ExampleProducts />
        <AutomaticScroll />
        <WeAre />
        <Slider />
        <Coments />
        <Footer />
    </div>
}