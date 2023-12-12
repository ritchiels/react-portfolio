// import { useState } from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useStateContext } from './StateContext'
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify'
import { useTheme } from './ThemeContext'
import 'react-toastify/dist/ReactToastify.css'
import ProfilePic from '../src/img/rich-prof.jpg'
import EmailModal from './components/EmailModal'
import RocketModal from './components/RocketModal'
import Projects from './components/Projects'
import './App.css'

function App() {
    const { showEmailModal, toggleEmailModal, showRocketModal, toggleRocketModal } = useStateContext();
    const { theme } = useTheme();

    return (
        <>
            <Container className={`main grid ${theme}`}>
                {/* profile */}
                <section className="profile" id="home">
                    <div className="pt-40 m-auto justify-center grid-col md:flex">
                        <div className="profile-pic-container mr-4 flex-col">
                            <img src={ProfilePic} className="profile-pic" />
                        </div>
                        <div className="flex flex-col md:mt-6">
                            <h1 className="my-h1 mt-4 text-5xl font-dmserif font-bold m-auto text-lapiz-lazuli bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text">Web Dev<br /><span className="text-8xl ml-5">Ritchie</span></h1>
                            <div className="flex space-x-14 md:space-x-10 items-center m-auto mt-4 mb-2 text-lapiz-lazuli">
                                <a href="https://github.com/ritchiels" target="_blank" rel="noreferrer" className="socials">
                                    <FontAwesomeIcon icon={faGithub} size="xl" />
                                </a>
                                <button className="socials" onClick={toggleEmailModal}>
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                </button>
                                <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" target="_blank" rel="noreferrer" className="socials">
                                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                </a>
                                <button className="socials animate-pulse" onClick={toggleRocketModal}>
                                    <FontAwesomeIcon icon={faRocket} size="xl" />
                                </button>
                                {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
                                {showRocketModal && <RocketModal toggle={toggleRocketModal} />}
                            </div>
                            <p className="text-lg md:text-md text-center font-bold font-comfortaa text-gray-500 mt-4 ml-2 mb-2">
                                Full-stack React developer
                            </p>
                            <p className="text-md md:text-sm text-center font-semibold font-comfortaa text-gray-500 mt-2 ml-2 mb-2">
                                📍 Florida, USA
                            </p>
                        </div>
                    </div>
                    <div className="pt-5 mt-10 md:mt-0 justify-center hidden md:block">
                        <hr className="w-50 m-auto" />
                        <div className="flex flex-col">
                            <p className="text-2xl md:text-sm text-center font-bold font-comfortaa text-gray-500 mt-4 mb-10 md:mb-4">
                                Techs I enjoy using:
                            </p>
                            <div className="grid grid-cols-3 gap-6 m-auto mb-4 md:flex justify-center">
                                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" htmlFor="html">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" htmlFor="css">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" htmlFor="javascript">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer" htmlFor="tailwind">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://react.dev/" target="_blank" rel="noreferrer" htmlFor="react">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mobile-stack-icons" />
                                </a>
                                {/* <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" htmlFor="nextjs">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="mobile-stack-icons" />
                                </a> */}
                                <a href="https://nodejs.org/en/docs" target="_blank" rel="noreferrer" htmlFor="nodejs">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer" htmlFor="mongodb">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noreferrer" htmlFor="mui">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://cloud.google.com/docs" target="_blank" rel="noreferrer" htmlFor="cloud">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="mobile-stack-icons" />
                                </a>
                                <a href="https://www.figma.com/developers" target="_blank" rel="noreferrer" htmlFor="figma">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="mobile-stack-icons" />
                                </a>
                            </div>
                        </div>
                        <hr className="w-50 m-auto mt-4" />
                    </div>
                </section>
                {/* projects */}
                <Projects />
                {/* accolades */}
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

//todo: fix styling on to-the-moon modal
//todo: make projects responsive
//todo: consider splitting CSS into multiple files, i.e. "Projects.css", "Profile.css"