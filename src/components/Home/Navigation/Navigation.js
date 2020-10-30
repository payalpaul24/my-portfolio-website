import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faProjectDiagram, faBlog, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="container-fluid header p-3">
            <Navbar className="navbar" collapseOnSelect expand="lg" bg="" variant="">
                <Navbar.Toggle style={{ backgroundColor: 'cyan',marginBottom:'200px' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="mt-5">
                    <Nav className="ml-auto mt-5 d-block icon-box">
                        <Nav.Link className="link active" href="/home">
                            <Link to="/home">
                               <FontAwesomeIcon className="icon" icon={faHome} />
                            </Link>
                            <p>Home</p>
                        </Nav.Link>
                        <Nav.Link className="link" href="/about">
                           <Link to="/about">
                               <FontAwesomeIcon className="icon" icon={faAddressCard} />
                            </Link>
                            <p>About</p>
                        </Nav.Link>
                        <Nav.Link className="link" href="/allProject">
                            <Link to="/allProject">
                              <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
                            </Link>
                            <p>Project</p>
                        </Nav.Link>
                        <Nav.Link className="link" href="/blog">
                             <Link to="/blogDetails">
                               <FontAwesomeIcon className="icon" icon={faBlog} />
                              </Link>
                            <p>Blog</p>
                        </Nav.Link>
                        <Nav.Link className="link" href="/contact">
                            <Link to="/contact">
                              <FontAwesomeIcon className="icon" icon={faFileContract} />
                            </Link>
                            <p>Contact</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;