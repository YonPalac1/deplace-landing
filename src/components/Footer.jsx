import { Reveal } from "../commons/Reveal"

export const Footer = () => {
    return <div className="footer">
        <div className="footer-col">

            <p>subscribe to newsletter</p>
            <img src="https://web.archive.org/web/20220122221708im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d2dc19a2be6baa7f9e25b8c_newsletter-face.svg" />

        </div>
        <div className="footer-col">
            <p>info</p>
            <a>faq</a>
            <a>returns</a>
            <a>contact</a>
        </div>

        <div className="footer-col">
            <p>policy</p>
            <a>terms</a>
            <a>privacy</a>
            <a>cookie</a>
        </div>

        <div className="footer-col footer-bottom">
            <label>Subscribe to our newsletter</label>
            <form>
                <input placeholder="email address"></input>
                <button>submit</button>
            </form>
        </div>

        <div className="footer-col footer-bottom">
            <span>credits</span>
        </div>
        <div className="footer-col footer-bottom">
            <span>2024 deplace maison</span>
        </div>
    </div>
}