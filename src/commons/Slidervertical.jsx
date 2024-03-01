import { useState, useRef, useEffect } from 'react';
import { PRODUCTS } from '../const'
import { Reveal } from "../commons/Reveal";
import Marquee from "react-fast-marquee";

export const SliderVertical = ({ direction }) => {
    return <div className="carousel-vertical">
        <Marquee
        // autoFill={true}
        speed={50}
        direction={direction}
            className="inner-carousel-vertical">
            {
                PRODUCTS.map((item, i) => {
                    return <div className="item"
                        key={i}>
                            <div className='container-img'>
                                <img src={item.img} alt="" />

                            </div>
                        <Reveal>
                            <div className='item-details'>
                                <p className="item_type">{item.type}</p>
                                <p className="item_waist">{item.waist}</p>
                                <h4>{item.name}</h4>
                                <span>{item.price}</span>
                            </div>
                        </Reveal>
                    </div>
                })
            }
        </Marquee>
    </div>
}