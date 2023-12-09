import { useContext } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import EmailModal from './EmailModal'
import { Link } from 'react-scroll'
import { StateContext } from '../StateContext'
import Smeech from '../img/favicon.ico'

const NavBar = () => {
    const { showEmailModal, toggleEmailModal } = useContext(StateContext);

    return (
        <Navbar expand="md" className="d-none d-md-flex p-0 bg-gray-200 sticky-top">
            <div className="flex align-items-center w-100">
                <NavbarBrand className="flex align-items-center">
                    <img src={Smeech} className="nav-pic mr-2 rounded-full" alt="logo" />
                    <h2 className="nav-header text-lapiz-lazuli text-lg font-semibold font-poppins mb-0">Web Dev Ritchie</h2>
                </NavbarBrand>
                <Nav className="ml-auto space-x-2 font-poppins" navbar>
                    <NavItem>
                        <NavLink>
                            <Link
                                className="nav-home" 
                                to="home" 
                                spy={true}
                                smooth={true} 
                                offset={-40} 
                                duration={50}
                            >
                                Home
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link 
                                className="nav-projects"
                                to="projects" 
                                spy={true}
                                smooth={true} 
                                duration={50}
                            >
                                Projects
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link
                                className="nav-accolades" 
                                to="accolades"
                                spy={true} 
                                smooth={true} 
                                duration={50}
                            >
                                Accolades
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <button onClick={toggleEmailModal}>
                            <NavLink to="#">Contact</NavLink>
                        </button>
                    </NavItem>
                </Nav>
            </div>
            {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
        </Navbar>
    )
}

export default NavBar

//todo: convert NavItem's to html so react-scroll spy prop works