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
    <Navbar color="light" expand="md" className="bg-gray-400 text-lapiz-lazuli p-0 sticky-top">
        <div className="d-flex justify-content-between align-items-center w-100 text-lapiz-lazuli">
            <NavbarBrand className="d-flex align-items-center">
                <img src={Smeech} className="nav-pic mr-2 rounded-full" />
                <h2 className="nav-header font-poppins font-semibold text-lapiz-lazuli mb-0">Web Dev Ritchie</h2>
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