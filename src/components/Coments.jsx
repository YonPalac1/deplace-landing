import { useRef, useState, useEffect } from "react";
import { COMENTS } from "../const"
import { Reveal } from "../commons/Reveal";

export const Coments = () => {
    return <div className="container">
        <div className="comments">
            {
                COMENTS.map((item, i) => {
                    return <div className="comment_content" key={i}>

                        <img src="https://web.archive.org/web/20220122221713im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d0b92e20369a4438cd54272_virgolette.svg" />
                        <Reveal>
                            <h2 key={i}>{item.name}</h2>
                        </Reveal>
                        <Reveal>
                            <p>{item.coment}</p>
                        </Reveal>
                    </div>
                })
            }
        </div>
    </div>
}