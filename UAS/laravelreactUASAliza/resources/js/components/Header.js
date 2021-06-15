import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
 
const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link className='navbar-brand' to='/home'>SIMPEG IT SOLUTION COMPANY</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link className='navbar-brand' to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link className='navbar-brand' to='/pegawai'>Data Pegawai</Link></Nav.Link>
            <Nav.Link><Link className='navbar-brand' to='/pelatihan'>Data Pelatihan Online</Link></Nav.Link>
            <Nav.Link><Link className='navbar-brand' to='/event'>Data Event</Link></Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link><Link className='navbar-brand' to='/about'>Tentang Kami</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
)
 
export default Header;