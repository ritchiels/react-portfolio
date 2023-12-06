import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap'
import Smeech from '../img/favicon.ico'

const NavBar = () => {
    const [collapse, setCollapse] = useState(false);

    const toggle = () => setCollapse(!collapse);

    return (
        <Navbar expand="md" className="d-none d-md-flex p-0 bg-gray-100 sticky-top">
            <div className="flex align-items-center w-100">
                <NavbarBrand className="flex align-items-center" onClick={toggle}>
                    <img src={Smeech} className="nav-pic mr-2 rounded-full" alt="logo" />
                    <h2 className="nav-header text-lapiz-lazuli text-lg font-semibold font-poppins mb-0">Web Dev Ritchie</h2>
                </NavbarBrand>
                <Nav className="ml-auto space-x-2 font-poppins" navbar>
                    <NavItem onClick={toggle}>
                        <NavLink href="#home">Home</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#accolades">Accolades</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <button>
                            <NavLink href="#">Contact</NavLink>
                        </button>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    )
}

export default NavBar

//perhaps remove navbar from mobile?