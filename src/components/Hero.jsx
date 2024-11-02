export default function Hero() {
    return (
        <div className="hero container py-4">
            <p className="first-para my-4">We Provide Architectural design and Construction</p>
            <p className="second-para py-4">More than 100 building and housing projects that we have built. The building owner chose us over other contractors in Jakarta, because our work is different</p>
            <button className="main-btn my-4">Discover More</button>
            <div className="hints d-flex flex-row justify-content-between align-items-center py-4">
                <div className="hint">
                    <h2>300 <span>+</span></h2>
                    <p>Happy Client</p>
                </div>
                <div className="hint">
                    <h2>900 <span>+</span></h2>
                    <p>Amazing Projects</p>
                </div>
                <div className="hint">
                    <h2>20 <span>+</span></h2>
                    <p>Awards Winning</p>
                </div>
            </div>
            <div className="project-hint d-flex flex-row justify-content-between align-items-center p-5">
                <h2><span>General</span> Project</h2>
                <h2>25 <span>Years</span> Operated</h2>
                <p>As a trusted general project that has been operating for 25 years, our commitment is always to prioritize our client satisfaction</p>
            </div>
        </div>
    )
}