import { useEffect, useState } from "react";
import { SliderVertical } from "../commons/Slidervertical";
import { Navbar } from "../components/Navbar";
import "./Category.css"

export const Category = () => {

    return <div className="marquess">
        <Navbar />
        <div className="marquees-slides">
            <SliderVertical direction={"right"} />
            <SliderVertical direction={"left"}/>
        </div>
    </div>
}