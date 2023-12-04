// import { useState } from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ProfilePic from '../src/img/rich-prof.jpg'
import './App.css'

function App({ toggleEmailModal }) {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Container className="main grid">
                <section className="profile m-auto grid-row" id="profile">
                    <div className="profile-pic-container">
                        <img src={ProfilePic} className="profile-pic" />
                    </div>
                    <div className="flex flex-col md:mt-10">
                        <h1 className="intro-text text-4xl md:text-5xl font-dmserif font-bold m-auto mt-2 text-lapiz-lazuli fade-in-header bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text">Web Dev<br /><span className="md:text-8xl ml-5">Ritchie</span></h1>
                        <div className="flex space-x-16 md:space-x-14 items-center m-auto mt-4 mb-2 text-lapiz-lazuli fade-in-socials">
                            <a href="https://github.com/ritchiels" className="socials">
                                <FontAwesomeIcon icon={faGithub} size="xl" />
                            </a>
                            <button className="socials" onClick={toggleEmailModal}>
                                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                            </button>
                            <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                            </a>
                            {/* {showEmailModal && <EmailModal toggle={toggleEmailModal} />} */}
                        </div>
                        <p className="text-lg md:text-md text-center font-bold font-comfortaa text-gray-500 mt-4 ml-2 mb-2">
                            Full-stack React developer
                        </p>
                        <p className="text-md md:text-sm text-center font-semibold font-comfortaa text-gray-500 mt-2 ml-2 mb-2">
                            📍 Florida, USA
                        </p>
                    </div>
                </section>
                <section className="projects m-auto grid-row" id="projects">
                    <p>projects</p>
                </section>
                <section className="Accolades hidden sm:grid m-auto" id="accolades">
                    <p>accolades</p>
                </section>
            </Container>
        </>
    )
}

export default App
