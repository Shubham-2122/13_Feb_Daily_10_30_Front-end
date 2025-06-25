import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Navs from '../Coman/Navs'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Triaining() {

    const [train, settrain] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/training")
        // console.log(res.data)
        settrain(res.data)
    }

    // 


    return (
        <div>
            <Header />
            <Navs title="Our Training" name="Training" />
            <div>
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
                            {

                                train && train.map((data, index) => {
                                    return (
                                        <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="training-item">
                                                <div className="training-inner">
                                                    <img src={data.img} style={{ height: "300px" }} className="img-fluid w-100 rounded" alt="Image" />
                                                    <div className="training-title-name">
                                                        <a href="#" className="h4 text-white mb-0">{data.title}</a>

                                                    </div>
                                                </div>
                                                <div className="training-content bg-secondary rounded-bottom p-4">
                                                    <a href="#"><h4 className="text-white">{data.title}</h4></a>
                                                    <p className="text-white-50">{data.desc}</p>
                                                    <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            <div className="col-12 text-center">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Training End */}
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts overflow-hidden py-5">
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
                {/* Countries We Offer Start */}
                <div className="container-fluid country overflow-hidden py-5">
                    <div className="container py-5">
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
            </div>
            <Footer />

        </div>
    )
}

export default Triaining
