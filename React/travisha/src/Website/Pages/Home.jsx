import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function Home() {
    return (
        <div>
            <Header />
            <div>
                {/* Carousel Start */}
                <div className="carousel-header">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" />
                            <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
                                <div className="carousel-caption">
                                    <div className="text-center p-4" style={{ maxWidth: 900 }}>
                                        <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Solution For All Type Of Visas</h4>
                                        <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Immigration Process Starts Here!</h1>
                                        <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
                                <div className="carousel-caption">
                                    <div className="text-center p-4" style={{ maxWidth: 900 }}>
                                        <h5 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Solution For All Type Of Visas</h5>
                                        <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Best Visa Immigrations Services</h1>
                                        <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                        <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-secondary wow fadeInLeft" data-wow-delay="0.2s" aria-hidden="false" />
                            <span className="visually-hidden-focusable">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-secondary wow fadeInRight" data-wow-delay="0.2s" aria-hidden="false" />
                            <span className="visually-hidden-focusable">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
                {/* Modal Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h4 className="modal-title text-secondary mb-0" id="exampleModalLabel">Search by keyword</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Search End */}
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                                <div className="bg-light rounded">
                                    <img src="img/about-2.png" className="img-fluid w-100" style={{ marginBottom: '-7px' }} alt="Image" />
                                    <img src="img/about-3.jpg" className="img-fluid w-100 border-bottom border-5 border-primary" style={{ borderTopRightRadius: 300, borderTopLeftRadius: 300 }} alt="Image" />
                                </div>
                            </div>
                            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
                                <h5 className="sub-title pe-3">About the company</h5>
                                <h1 className="display-5 mb-4">We’re Trusted Immigration Consultant Agency.</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis blanditiis assumenda dignissimos, commodi fuga culpa earum explicabo libero sint est mollitia saepe! Sequi asperiores rerum nemo!</p>
                                <div className="row gy-4 align-items-center">
                                    <div className="col-12 col-sm-6 d-flex align-items-center">
                                        <i className="fas fa-map-marked-alt fa-3x text-secondary" />
                                        <h5 className="ms-4">Best Immigration Resources</h5>
                                    </div>
                                    <div className="col-12 col-sm-6 d-flex align-items-center">
                                        <i className="fas fa-passport fa-3x text-secondary" />
                                        <h5 className="ms-4">Return Visas Availabile</h5>
                                    </div>
                                    <div className="col-4 col-md-3">
                                        <div className="bg-light text-center rounded p-3">
                                            <div className="mb-2">
                                                <i className="fas fa-ticket-alt fa-4x text-primary" />
                                            </div>
                                            <h1 className="display-5 fw-bold mb-2">34</h1>
                                            <p className="text-muted mb-0">Years of Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-8 col-md-9">
                                        <div className="mb-5">
                                            <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2" /> Offer 100 % Genuine Assistance</p>
                                            <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2" /> It’s Faster &amp; Reliable Execution</p>
                                            <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2" /> Accurate &amp; Expert Advice</p>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                                <a href className="position-relative wow tada" data-wow-delay=".9s">
                                                    <i className="fa fa-phone-alt text-primary fa-3x" />
                                                    <div className="position-absolute" style={{ top: 0, left: 25 }}>
                                                        <span><i className="fa fa-comment-dots text-secondary" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <span className="text-primary">Have any questions?</span>
                                                <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: 2 }}>Free: +0123 456 7890</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts py-5">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-passport" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Categories</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">31</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Team Members</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">377</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-user-check" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Process</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">4.9</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>K</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-handshake" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Success Rates</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">98</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Facts End */}
                {/* Services Start */}
                <div className="container-fluid service overflow-hidden pt-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                            </div>
                            <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Job Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Job Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Business Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Business Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Diplometic Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Diplometic Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Students Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Students Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Residence Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Residence Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item">
                                    <div className="service-inner">
                                        <div className="service-img">
                                            <img src="img/service-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        </div>
                                        <div className="service-title">
                                            <div className="service-title-name">
                                                <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                    <a href="#" className="h4 text-white mb-0">Tourist Visa</a>
                                                </div>
                                                <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content pb-4">
                                                <a href="#"><h4 className="text-white mb-4 py-3">Tourist Visa</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                                    <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Features Start */}
                <div className="container-fluid features overflow-hidden py-5">
                    <div className="container">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                            </div>
                            <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 justify-content-center text-center">
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="feature-item text-center p-4">
                                    <div className="feature-icon p-3 mb-4">
                                        <i className="fas fa-dollar-sign fa-4x text-primary" />
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-3">Cost-Effective</h5>
                                        <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="feature-item text-center p-4">
                                    <div className="feature-icon p-3 mb-4">
                                        <i className="fab fa-cc-visa fa-4x text-primary" />
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-3">Visa Assistance</h5>
                                        <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="feature-item text-center p-4">
                                    <div className="feature-icon p-3 mb-4">
                                        <i className="fas fa-atlas fa-4x text-primary" />
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-3">Faster Processing</h5>
                                        <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="feature-item text-center p-4">
                                    <div className="feature-icon p-3 mb-4">
                                        <i className="fas fa-users fa-4x text-primary" />
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-3">Direct Interviews</h5>
                                        <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Countries We Offer Start */}
                <div className="container-fluid country overflow-hidden py-5">
                    <div className="container">
                        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: 70 }}>
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                            </div>
                            <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 text-center">
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/brazil.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Brazil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/india.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">india</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/usa.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">New York</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/italy.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Italy</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Countries We Offer End */}
                {/* Testimonial Start */}
                <div className="container-fluid testimonial overflow-hidden pb-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
                            </div>
                            <h1 className="display-5 mb-4">What Our Clients Say</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow zoomInDown" data-wow-delay="0.2s">
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Training Start */}
                <div className="container-fluid training overflow-hidden bg-light py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
                            </div>
                            <h1 className="display-5 mb-4">Get the Best Coacing Service Training with Our Travisa</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">IELTS</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">IELTS Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">TOEFL</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">TOEFL Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">PTE</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">PTE Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="training-item">
                                    <div className="training-inner">
                                        <img src="img/training-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                        <div className="training-title-name">
                                            <a href="#" className="h4 text-white mb-0">OET</a>
                                            <a href="#" className="h4 text-white mb-0">Coaching</a>
                                        </div>
                                    </div>
                                    <div className="training-content bg-secondary rounded-bottom p-4">
                                        <a href="#"><h4 className="text-white">OET Coaching</h4></a>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                        <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Training End */}
                {/* Contact Start */}
                <div className="container-fluid contact overflow-hidden pb-5">
                    <div className="container py-5">
                        <div className="office pt-5">
                            <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="sub-style">
                                    <h5 className="sub-title text-primary px-3">Worlwide Offices</h5>
                                </div>
                                <h1 className="display-5 mb-4">Explore Our Office Worldwide</h1>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                            </div>
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="office-item p-4">
                                        <div className="office-img mb-4">
                                            <img src="img/office-2.jpg" className="img-fluid w-100 rounded" alt />
                                        </div>
                                        <div className="office-content d-flex flex-column">
                                            <h4 className="mb-2">Australia</h4>
                                            <a href="#" className="text-secondary fs-5 mb-2">+123.456.7890</a>
                                            <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                            <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="office-item p-4">
                                        <div className="office-img mb-4">
                                            <img src="img/office-1.jpg" className="img-fluid w-100 rounded" alt />
                                        </div>
                                        <div className="office-content d-flex flex-column">
                                            <h4 className="mb-2">Canada</h4>
                                            <a href="#" className="text-secondary fs-5 mb-2">(012) 0345 6789</a>
                                            <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                            <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="office-item p-4">
                                        <div className="office-img mb-4">
                                            <img src="img/office-3.jpg" className="img-fluid w-100 rounded" alt />
                                        </div>
                                        <div className="office-content d-flex flex-column">
                                            <h4 className="mb-2">United Kingdom</h4>
                                            <a href="#" className="text-secondary fs-5 mb-2">01234.567.890</a>
                                            <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                            <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="office-item p-4">
                                        <div className="office-img mb-4">
                                            <img src="img/office-4.jpg" className="img-fluid w-100 rounded" alt />
                                        </div>
                                        <div className="office-content d-flex flex-column">
                                            <h4 className="mb-2">India</h4>
                                            <a href="#" className="text-secondary fs-5 mb-2">+123.45.67890</a>
                                            <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                            <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>
            <Footer />


        </div>
    )
}

export default Home
