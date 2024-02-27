import { Reveal } from "../commons/Reveal"

export const Header = () => {
    return <div className="container">
        <div className="header container_position">
            <Reveal>
                <h2>Spring,</h2>
            </Reveal>
            <div className="title-summer">
                <Reveal>
                    <h2>Summer</h2>
                </Reveal>
                <Reveal>
                    <span>Coll. <br /> 2023</span>
                </Reveal>
            </div>
        </div>
    </div>
}