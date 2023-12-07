// import { useState } from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useStateContext } from './StateContext'
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProfilePic from '../src/img/rich-prof.jpg'
import EmailModal from './components/EmailModal'
import RocketModal from './components/RocketModal'
// import DevBotPic from '../img/dev-bot-screen.png'
// import PromptopiaPic from '../img/promptopia-screen.png'
// import SumUpPic from '../img/sum-up-screen.png'
// import Vite from '../img/vite.svg'
// import Github from '../img/github.svg'
// import Vercel from '../img/logo-vercel.svg'
import './App.css'

function App() {
    const { showEmailModal, toggleEmailModal, showRocketModal, toggleRocketModal } = useStateContext();

    return (
        <>
            <Container className="main grid">
                <section className="profile pt-40 m-auto grid-col md:flex" id="profile">
                    <div className="profile-pic-container mr-4 flex-col">
                        <img src={ProfilePic} className="profile-pic" />
                    </div>
                    <div className="flex flex-col md:mt-6">
                        <h1 className="my-h1 mt-4 text-5xl font-dmserif font-bold m-auto text-lapiz-lazuli bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text">Web Dev<br /><span className="text-8xl ml-5">Ritchie</span></h1>
                        <div className="flex space-x-14 md:space-x-10 items-center m-auto mt-4 mb-2 text-lapiz-lazuli">
                            <a href="https://github.com/ritchiels" className="socials">
                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                            </a>
                            <button className="socials" onClick={toggleEmailModal}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            </button>
                            <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                            <button className="socials animate-pulse" onClick={toggleRocketModal}>
                                <FontAwesomeIcon icon={faRocket} size="2xl" />
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
                </section>
                <section className="pt-5 mt-10 md:mt-0">
                    <hr className="w-75 m-auto" />
                    <div className="flex flex-col">
                        <p className="text-2xl md:text-sm text-center font-bold font-comfortaa text-gray-500 mt-4 mb-10 md:mb-4">
                            Techs I enjoy using:
                        </p>
                        <div className="grid grid-cols-3 gap-6 m-auto mb-4 md:flex justify-center">
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" htmlFor="html">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" htmlFor="css">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" htmlFor="javascript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://tailwindcss.com/docs/installation" htmlFor="tailwind">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://react.dev/" htmlFor="react">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nextjs.org/docs" htmlFor="nextjs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nodejs.org/en/docs" htmlFor="nodejs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.mongodb.com/docs/" htmlFor="mongodb">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://mui.com/material-ui/getting-started/" htmlFor="mui">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://cloud.google.com/docs" htmlFor="cloud">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.figma.com/developers" htmlFor="figma">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="mobile-stack-icons" />
                            </a>
                        </div>
                    </div>
                    <hr className="w-75 m-auto mt-4" />
                </section>
                {/* <section className="accolades hidden sm:grid m-auto" id="accolades">
                    <p>accolades</p>
                </section> */}
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
//todo: add rumbling rocket icon and to-the-moon component
//todo: make anchors open in new tab: target="_blank"