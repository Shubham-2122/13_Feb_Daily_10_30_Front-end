import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Uid")){
            redirect("/login")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Uid")
        localStorage.removeItem("Uname")
        toast.success("Logout successfully..!")
        redirect("/login")
    }

    return (
        <div>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-primary px-5 d-none d-lg-block">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-5 text-center text-lg-start mb-lg-0">
                            <div className="d-flex">
                                <a href="#" className="text-muted me-4"><i className="fas fa-envelope text-secondary me-2" />Example@gmail.com</a>
                                <a href="#" className="text-muted me-0"><i className="fas fa-phone-alt text-secondary me-2" />+01234567890</a>
                            </div>
                        </div>
                        <div className="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal text-secondary" /></a>
                                <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal text-secondary" /></a>
                                <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal text-secondary" /></a>
                                <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal text-secondary" /></a>
                                <a className="btn btn-sm btn-outline-light btn-square rounded-circle" href><i className="fab fa-youtube fw-normal text-secondary" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a href="#" className="text-muted me-2"> Help</a><small> / </small>
                                <a href="#" className="text-muted mx-2"> Support</a><small> / </small>
                                <a href="#" className="text-muted ms-2"> Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar & Hero Start */}
                <div className="container-fluid nav-bar p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href className="navbar-brand p-0">
                            <h1 className="display-5 text-secondary m-0"><img src="img/brand-logo.png" className="img-fluid" alt />Travisa</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Pages</span></a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/feature" className="dropdown-item">Feature</NavLink>
                                        <NavLink to="/countries" className="dropdown-item">Countries</NavLink>
                                        <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="/trian" className="dropdown-item">Training</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                {
                                    (() => {
                                        if (localStorage.getItem("Uid")) {
                                            return (
                                            <>
                                                <Link  className="nav-item nav-link">hello.. {localStorage.getItem("Uname")}</Link>
                                            </>
                                        )
                                        }
                                    })()
                                }
                                {
                                    (()=>{
                                        if(localStorage.getItem("Uid")){
                                            return(
                                                <>
                                                     <Link  className="nav-item nav-link" onClick={logout}>logout</Link>
                                                </>
                                            )
                                        }
                                        else{
                                            return(
                                                <>
                                                     <Link to="/login" className="nav-item nav-link">Login</Link>
                                                </>
                                            )
                                        }
                                    })()
                                }
                            </div>

                        </div>
                    </nav>
                </div>
                {/* Navbar & Hero End */}
            </div>

        </div>
    )
}

export default Header
