import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/my-booky logo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="header sticky-top">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to={'/home'}><img className='logoImage' src={logo} alt="Logos" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/home'}>Home</Link>
                            </li>
                            {
                                user ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/manageinventory'}>Manage books</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/additem'}>Add books</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/myitem'}>My books</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                    </>

                            }
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blogs'}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <div className='verify'>
                                    {user?.email ?
                                        <div className="nav-link logOut">
                                            <box-icon className="userIcn" type='solid' name='log-in-circle' color='#CA2517'></box-icon>
                                            <p onClick={logout}>Logout</p>
                                        </div>
                                        :
                                        <Link className="nav-link logIn" to={'/login'}>
                                            <box-icon type='solid' className="userIcn bx-md" name='user-circle' color='#CA2517'></box-icon>
                                            <p>Log or Register</p>
                                        </Link>
                                    }
                                </div>
                            </li>

                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;