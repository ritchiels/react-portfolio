// import { useState } from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useStateContext } from './StateContext'
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProfilePic from '../src/img/rich-prof.jpg'
import EmailModal from './components/EmailModal'
import './App.css'

function App() {
    const { showEmailModal, toggleEmailModal } = useStateContext();

    return (
        <>
            <Container className="main grid">
                <section className="profile pt-20 m-auto grid-row" id="profile">
                    <div className="profile-pic-container">
                        <img src={ProfilePic} className="profile-pic" />
                    </div>
                    <div className="flex flex-col md:mt-10">
                        <h1 className="my-h1 mt-4 text-5xl font-dmserif font-bold m-auto text-lapiz-lazuli bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text">Web Dev<br /><span className="text-8xl ml-5">Ritchie</span></h1>
                        <div className="flex space-x-16 md:space-x-14 items-center m-auto mt-4 mb-2 text-lapiz-lazuli fade-in-socials">
                            <a href="https://github.com/ritchiels" className="socials">
                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                            </a>
                            <button className="socials" onClick={toggleEmailModal}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </button>
                            <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                            {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
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
            <ToastContainer
                position="bottom-center"
                transition={Bounce}
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default App

//todo: re-align Profile styling