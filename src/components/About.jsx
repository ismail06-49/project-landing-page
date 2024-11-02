import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBriefcase, faClockRotateLeft, faQuoteLeft, faShieldHalved, faTag } from '@fortawesome/free-solid-svg-icons'
import project from '../assets/project.png'
import dianne from '../assets/dianna.png'
import story from '../assets/story.png'
import col1 from '../assets/collection1.png'
import col2 from '../assets/collection2.png'
import col3 from '../assets/collection3.png'
import col4 from '../assets/collection4.png'
import jacob from '../assets/jacoub.png'

export default function About() {
    return (
        <div className="container">
            <div className="about d-flex flex-row justify-content-between align-items-center py-5">
                <div className="title my-4">
                    <div></div>
                    <h2>What Make Us Different?</h2>
                </div>
                <p>Check out our best service you can possibly orders in building your company and don&apos;t forget to ask via our email or our customer service if you are interested in using our services</p>
            </div>
            <div className="dif d-flex flex-row justify-content-between my-4">
                <div>
                    <div className="icon">
                    <FontAwesomeIcon className='fontIcon' icon={faBriefcase} />
                    </div>
                    <h3>Experienced</h3>
                    <p>Our experience of 25 years of building and making achievements in the world of development</p>
                </div>
                <div>
                    <div className="icon">
                        <FontAwesomeIcon className='fontIcon' icon={faTag} />
                    </div>
                    <h3>competitive price</h3>
                    <p>The prices we offer you are very competitive without reducing the quality of the company&apos;s work in the slightest</p>
                </div>
                <div>
                    <div className="icon">
                        <FontAwesomeIcon className='fontIcon' icon={faClockRotateLeft} />
                    </div>
                    <h3>On Time</h3>
                    <p>We prioritize the quality of our work and finish it on time</p>
                </div>
                <div>
                    <div className="icon">
                        <FontAwesomeIcon className='fontIcon' icon={faShieldHalved} />
                    </div>
                    <h3>Best Materials</h3>
                    <p>The material determines the building itself so we recommend that you use the best & quality materials in its class.</p>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center py-5">
                <img src={project} alt="Project" />
                <div className="per">
                    <img src={dianne} alt="Team Membre" />
                    <h3>Dianne Russell</h3>
                    <p>More than 20 years of experience in the field architecture and has worked on project up to 100+</p>
                </div>
                <div className='team'>
                    <h2>Meet and talk with our best architecture</h2>
                    <p>All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>
                    <button className="main-btn">See all team</button>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center my-4">
                <div className='story'>
                    <h2>Our Story Who we are</h2>
                    <p>Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. As the company grows, now we are present as a reliable...</p>
                    <button className="main-btn">See More</button>
                </div>
                <img src={story} alt="Story" />
            </div>
            <div className="collect py-4">
                <h2>Our collection best project</h2>
                <div className="collection d-flex flex-row justify-content-between align-items-center">
                    <img src={col1} alt="Alt" />
                    <img src={col2} alt="Alt" />
                    <img src={col3} alt="Alt" />
                    <img src={col4} alt="Alt" />
                    <div className="card d-flex flex-row justify-content-between align-items-center">
                        <div>
                            <h3>Treasury Tower</h3>
                            <p>Project Completed</p>
                        </div>
                        <button className="main-btn">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="customers p-5">
                <img src={jacob} alt="Jacob" />
                <div className="jacob p-3">
                    <div>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <h3>Jacob Molen</h3>
                    <p>We like the final result this project, in extraordinary and also provides the best service to the client </p>
                </div>
                <div className="customer">
                    <h2>What we have done  &  what our Customers say</h2>
                    <p>We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform.</p>
                    <button className="main-btn">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}