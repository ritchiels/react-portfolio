import { useContext } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import EmailModal from './EmailModal';
import { StateContext } from '../StateContext';
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
                        <NavLink href="#home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#accolades">Accolades</NavLink>
                    </NavItem>
                    <NavItem>
                        <button onClick={toggleEmailModal}>
                            <NavLink href="#">Contact</NavLink>
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