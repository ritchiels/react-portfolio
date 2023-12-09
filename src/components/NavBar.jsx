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
        <Navbar expand="md" className="d-none d-md-flex p-0 bg-gray-100 sticky-top">
            <div className="flex align-items-center w-100">
                <NavbarBrand className="flex align-items-center">
                    <img src={Smeech} className="nav-pic mr-2 rounded-full" alt="logo" />
                    <h2 className="nav-header text-lapiz-lazuli text-lg font-semibold font-poppins mb-0">Web Dev Ritchie</h2>
                </NavbarBrand>
                <Nav className="ml-auto space-x-2 font-poppins" navbar>
                    <NavItem>
                        <Link to="#home" smooth={true} duration={500}>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#projects" smooth={true} duration={500}>Projects</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#accolades" smooth={true} duration={500}>Accolades</Link>
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

//perhaps remove navbar from mobile?