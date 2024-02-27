import img1 from "../assets/img/img-1.jpeg"
import img2 from "../assets/img/img-2.jpg"
import { Buttons } from "../commons/Buttons"
import { Reveal } from "../commons/Reveal"

export const ExampleProducts = () => {
    return <div className="container">
        <div className="images">
            <div className="images-container">
                {/* <Reveal> */}
                    <img src={img1}></img>
                    <div className="span-container">
                        <span>(01)</span>
                        <span>man</span>
                        <span></span>
                    </div>
                {/* </Reveal> */}
            </div>
            <div className="images-container">
                <Reveal>
                    <img src={img2}></img>
                    <div className="span-container">
                        <span>(02)</span>
                        <span>wmn</span>
                        <span></span>
                    </div>
                </Reveal>
            </div>
        </div>
        <Buttons text={"Explore"} />
    </div>
}