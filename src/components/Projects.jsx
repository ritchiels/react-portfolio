import DevBotPic from '../img/dev-bot-screen.png'
import BrainwavePic from '../img/brainwave-screen.png'
import SumUpPic from '../img/sum-up-screen.png'
import Vite from '../img/vite.svg'
import Github from '../img/github.svg'
import Vercel from '../img/logo-vercel.svg'
import { useTheme } from '../ThemeContext'

const Projects = () => {

    const { theme } = useTheme();

    return (
        <section className="projects items-center relative m-auto pb-4 mt-30">
            {/* devbot */}
            <div className="dev-bot flex flex-row mb-20">
                <div className="flex flex-col">
                    <a href="https://dev-bot.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={DevBotPic} className="project-images rounded-lg hover:animate-pulse" />
                    </a>
                    <div className="flex flex-row space-x-6 mt-3 m-auto">
                        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                            <img src={Vite} className="vite-pic" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" htmlFor="html">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="project-stack-icons" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" htmlFor="css">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="project-stack-icons" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" htmlFor="javascript">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="project-stack-icons" />
                        </a>
                    </div>
                </div>
                <div className="dev-bot-text flex flex-col items-center justify-center md:pl-10">
                    <h2 className="text-lapiz-lazuli text-xl font-montserrat font-semibold">Dev Bot</h2>
                    <p className="text-gray-600 text-sm font-comfortaa w-80 font-medium text-center">your new coding buddy, a chatbot made with JavaScript using OpenAI's api to utilize their gpt-3.5-turbo model</p>
                    <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                        <a href="https://github.com/ritchiels/vite-js-devbot" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Github} className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Code</p>
                        </a>
                        <a href="https://dev-bot.vercel.app/" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Vercel} className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Demo</p>
                        </a>
                    </div>
                </div>
            </div>
            {/* brainwave */}
            <div className="brainwave flex flex-row mb-20">
                <div className="brainwave-text flex flex-col items-center justify-center md:pr-10">
                    <h2 className="text-lapiz-lazuli text-xl font-montserrat font-semibold">Brainwave</h2>
                    <p className="text-gray-600 text-sm font-comfortaa w-80 font-medium text-center">a product page for an AI chatbot service, made with React and Tailwind, featuring a fully responsive, sleek design and several reusable components.</p>
                    <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                        <a href="https://github.com/ritchiels/brainwave" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Github} className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Code</p>
                        </a>
                        <a href="https://brainwave-gilt-one.vercel.app/" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Vercel} className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Demo</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <a href="https://brainwave-gilt-one.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={BrainwavePic} className="project-images rounded-lg hover:animate-pulse" />
                    </a>
                    <div className="flex flex-row space-x-6 m-auto mt-3">
                        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                            <img src={Vite} className="vite-pic" />
                        </a>
                        <a href="https://react.dev/" target="_blank" rel="noreferrer" htmlFor="react">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="project-stack-icons" />
                        </a>
                        <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer" htmlFor="tailwind">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="project-stack-icons" />
                        </a>
                    </div>
                </div>
            </div>
            {/* sum up */}
            <div className="sum-up flex flex-row mb-10">
                <div className="flex flex-col">
                    <a href="https://sum-up.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={SumUpPic} className="project-images rounded-lg hover:animate-pulse" />
                    </a>
                    <div className="flex flex-row space-x-6 mt-3 m-auto">
                        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                            <img src={Vite} className="vite-pic" />
                        </a>
                        <a href="https://react.dev/" target="_blank" rel="noreferrer" htmlFor="react">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="project-stack-icons" />
                        </a>
                        <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer" htmlFor="tailwind">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="project-stack-icons" />
                        </a>
                        <a href="https://redux.js.org/" target="_blank" rel="noreferrer" htmlFor="redux">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="project-stack-icons" />
                        </a>
                    </div>
                </div>
                <div className="sum-up-text flex flex-col items-center justify-center md:pl-10">
                    <h2 className="text-lapiz-lazuli text-xl font-montserrat font-semibold">Sum Up</h2>
                    <p className="text-gray-600 text-sm font-comfortaa w-60 font-medium text-center">a SaaS project made with React that allows users to sum up an article from a given URL</p>
                    <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                        <a href="https://github.com/ritchiels/sum-up-ai" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Github} target="_blank" rel="noreferrer" className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Code</p>
                        </a>
                        <a href="https://sum-up.vercel.app/" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                            <img src={Vercel} className="code-demo animate-bounce" />
                            <p className={`text-gray-600 text-sm font-comfortaa ${theme === 'dark' && 'animate-bounce'}`}>Demo</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects