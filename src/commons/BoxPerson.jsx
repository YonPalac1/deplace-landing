import Marquee from "react-fast-marquee"

export const BoxPerson = ({ img, name, job, marquee }) => {
    return <section className="box-personal">
        <div className="box-name">
            <h2>{name}</h2>
        </div>
        <div className="box-photo">
            <span>{job}</span>
            <Marquee autoFill={true} speed={200}>
                {marquee}
            </Marquee>
            <div className="image-person">
                <img src={img}></img>
            </div>
        </div>
    </section>
}