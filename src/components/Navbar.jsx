import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    return <div className="navbar">
        <h4>deplace maison</h4>
        <button onClick={() => setActive(!active)}>cart</button>

        <div className="navbar-links">
            <Link to="/category/all">shop</Link>
            <Link to="/collections">collections</Link>
            <Link to="/about">about</Link>
        </div>

        { active ? 
        <div className="container_cart">
            <div className="backdrop"  onClick={() => setActive(!active)}></div>

            <div className="cart">
                <h3>your cart</h3>
                <hr />
                <div className="content_in_cart">
                    <p>Add to cart first</p>
                </div>
            </div>
        </div>
        :
        ""
        }
    </div>
}