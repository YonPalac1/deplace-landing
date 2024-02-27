import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import "./about.css"

import p1 from "../assets/img/person-1.png"
import p2 from "../assets/img/person-2.png"
import p3 from "../assets/img/person-3.png"
import { BoxPerson } from "../commons/BoxPerson"

export const About = () => {
    return <>
        <Navbar />
        <div className="container-about">
            <div className="about-p">
                <p>we're a story of an engagement, <br /> which looks at the urban and outdoor <br/> world with a common vision.</p>
            </div>
            
            <BoxPerson img={p1} name={"marco"} job={"The event organizer"} marquee={"let's play good shit"} />
            <BoxPerson img={p2} name={"aldo"} job={"the architect"} marquee={"make some building"} />
            <BoxPerson img={p3} name={"leonardo"} job={"the tattoo artist"} marquee={"naughty but ink"} />
        </div>
        <Footer />
    </>
}