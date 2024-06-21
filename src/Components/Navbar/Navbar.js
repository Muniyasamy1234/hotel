import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvi'

const Navbar = () => {
    const auth = useAuth()
    return (
        <>
            {/* Hello world */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Logo
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    !auth.admin && auth.user &&
                                    <NavLink className="nav-link" to="/facilites">
                                        Facilites
                                    </NavLink>
                                }
                            </li>
                            {
                                !auth.user && <li className="nav-item">
                                    <NavLink className="nav-link" aria-disabled="true" to={'/signup'}>
                                        Signup
                                    </NavLink>
                                </li>
                            }
                            {
                                !auth.user && <li className="nav-item">
                                    <NavLink className="nav-link" aria-disabled="true" to={'/login'}>
                                        Login
                                    </NavLink>
                                </li>
                            }
                            {
                                !auth.user && <li className="nav-item">
                                    <NavLink className="nav-link" aria-disabled="true" to={'/adminLogin'}>
                                        Admin Login
                                    </NavLink>
                                </li>
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success " type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar