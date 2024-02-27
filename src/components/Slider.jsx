import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PRODUCTS } from "../const";
import { Buttons } from "../commons/Buttons";
import { Reveal } from "../commons/Reveal";

export const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return <motion.div ref={carousel} className="carousel"
    whileTap={{ cursor: "grabbing" }}>
        <motion.div
            drag="x"
            dragConstraints={{ right: 0 , left: -width}}
            className="inner-carousel">
            {
                PRODUCTS.map((item, i) => {
                    return <motion.div className="item"
                        key={i}>
                        <img src={item.img} alt="" />
                        <Reveal>
                            <p className="item_type">{item.type}</p>
                        <p className="item_waist">{item.waist}</p>
                        <h4>{item.name}</h4>
                        <span>{item.price}</span>
                        </Reveal>
                    </motion.div>
                })
            }
        </motion.div>
        <div className="container">
            <Buttons text={"shop all"} />
        </div>
    </motion.div>
}