import { useState } from 'react'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div className="main grid">
                <section className="profile m-auto grid-row" id="profile">
                    <p>profile</p>
                </section>
                <section className="projects m-auto grid-row" id="projects">
                    <p>projects</p>
                </section>
                <section className="Accolades hidden sm:grid m-auto" id="accolades">
                    <p>accolades</p>
                </section>
            </div>
        </>
    )
}

export default App
