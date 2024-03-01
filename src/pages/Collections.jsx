import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Navbar } from "../components/Navbar"
import { COL } from "../const"

import "./collection.css"
import Marquee from "react-fast-marquee"

export const Collections = () => {
    const [width, setWidth] = useState(0);
    const [cardWidth, setCardWith] = useState();
    const [cardHeight, setCardHeight] = useState();
    const [index, setIndex] = useState(1)
    const [itemCurrent, setItemCurrent] = useState(0)
    const carousel = useRef();
    const cardRef = useRef();

    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        setCardWith(cardRef.current.clientWidth)
        setCardHeight(cardRef.current.clientHeight)
    }, [index, cardWidth, cardHeight, itemCurrent, carousel])

    const handleBack = () => {
        if (itemCurrent < 0) {
            setIndex(prev => prev - 1)
            setItemCurrent(index * -cardWidth - 40 * index)
        }
    }
    function handleNext() {
        if (-itemCurrent < width) {
            setIndex(prev => prev + 1)
            setItemCurrent(index * -cardWidth - 40 * index)
        }
    }
    
    
    return <section className="collections">
        <Navbar />
        <motion.div className="container-slider">
            <motion.div className="border-box" style={{ width: cardWidth, height: cardHeight }}></motion.div>
            <motion.div
                className="slider-inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                ref={carousel}
                animate={{ x: itemCurrent }}
            >
                {
                    COL.map((item, i) => {
                        return <motion.div className="img" key={i} ref={cardRef}>
                            <img src={item}></img>
                        </motion.div>
                    })
                }
            </motion.div>
        </motion.div>
        <Marquee className="marquee-collections" speed={200}>colour shades mixed with urban trekking art and outdoor.</Marquee>
        <div className="controls">
            <div className="buttons">
                <button className="buttons-next" onClick={handleBack}>
                    <img src="https://web.archive.org/web/20220122221705im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg"></img>
                    <img src="https://web.archive.org/web/20220122221716im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg"></img>
                </button>
            </div>
            <div className="buttons">
                <button className="buttons-next" onClick={handleNext}>
                    <img src="https://web.archive.org/web/20220122221705im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg"></img>
                    <img src="https://web.archive.org/web/20220122221716im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg"></img>
                </button>
            </div>
        </div>
    </section>
} 