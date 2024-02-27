import { Reveal } from "../commons/Reveal"

export const WeAre = () => {
    return <div className="container">
        <div className="weare-container container_position">
            <div className="title-weare">
                <Reveal>
                    <h3>who we are</h3>
                </Reveal>
            </div>
            <Reveal>
                <p>
                    An independent <span>brand</span> of urban trekking shoes and accesories that comes from a convergence of arts and personalities.
                </p>
            </Reveal>
        </div>
    </div>
}