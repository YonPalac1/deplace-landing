import { useEffect, useState } from "react";
import { SliderVertical } from "../commons/Slidervertical";
import { Navbar } from "../components/Navbar";

export const Category = () => {

    return <>
        <Navbar />
        <div className="marquees-slides">
            <SliderVertical direction={"up"} />
            <SliderVertical direction={"down"}/>
        </div>
    </>
}