import { Link } from "react-router-dom"
import { Reveal } from "./Reveal"

export const Buttons = ({ text }) => {
    return <div className="button-next">
        <Reveal>
            <Link to="/category/all">{text}</Link>
        </Reveal>
        <div className="images-container_button">
            <img src="https://web.archive.org/web/20220122221705im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg"></img>
            <img src="https://web.archive.org/web/20220122221716im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg"></img>
        </div>
</div>
}