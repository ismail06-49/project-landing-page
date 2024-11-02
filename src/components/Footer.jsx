import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="container d-flex flex-row justify-content-between align-items-center">
            <div className="general">
                <h3>General Project</h3>
                <p>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia&apos;s development.</p>
                <div className="social d-flex flex-row align-items-center">
                    <div>
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
            <div className="company">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Company</option>
                    <option value="1">About</option>
                    <option value="2">How it Works</option>
                    <option value="3">Term</option>
                    <option value="3">Privacy Policy</option>
                </select>
            </div>
            <div className="more">
                <select className="form-select" aria-label="Default select example">
                    <option selected>More</option>
                    <option value="1">Documentation</option>
                    <option value="2">License</option>
                </select>
            </div>
        </div>
    )
}