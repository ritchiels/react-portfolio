import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import Smeech from '../img/favicon.ico'

const NavBar = () => {
  return (
    <Navbar expand="md" className="p-0 bg-gray-100 sticky-top">
        <div className="d-flex justify-content-between align-items-center w-100">
            <NavbarBrand className="d-flex align-items-center">
                <img src={Smeech} className="nav-pic mr-2 rounded-full" />
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