export default function Header() {
    return (
        <header className="header container d-flex flex-row justify-content-between align-items-center mb-4">
            <h1><span>General</span> Project</h1>
            <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center">
                <li>Home</li>
                <li>Services</li>
                <li>Find a Team</li>
                <li>About Us</li>
                <li>Articles</li>
                <li>Portfolio</li>
                <li>Contact us</li>
            </ul>
        </header>
    )
}