import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import slider1 from '../../assets/img/seimg/slider1.jpg';
import slider2 from '../../assets/img/seimg/slider2.jpg';
import slider3 from '../../assets/img/seimg/slider3.jpg';
import slidere from '../../assets/img/slidere.jpg'
import sliderB from '../../assets/img/sliderB.png'
import sliderC from '../../assets/img/computer-mouse-160032.svg'



const Navbar = () => {
    return (
        <>
            {/* Nvbar Starting  */}
            <header id="home" className=''>
                <nav className="navbar navbar-expand-lg bg-white px-4 border-bottom fixed-top font-fmasld">
                    <div className="container-fluid full">
                        <a className="navbar-brand fs-2 fw-bold" href="#">SE-<span className="text-danger"> Enterprises  </span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navuper text-center">
                                <li className="nav-item">
                                    <a className="nav-link active text-danger" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#services">It Maintenace </a></li>
                                        <li><a className="dropdown-item" href="#services">NetWorking & Cabling </a></li>
                                        <li><a className="dropdown-item" href="#services"> Rental Services  </a></li>
                                        <li><a className="dropdown-item" href="#services"> CCTV Security Systems  </a></li>
                                        <li><a className="dropdown-item" href="#services"> Telephonic Services  </a></li>
                                        <li><a className="dropdown-item" href="#services"> Web Hosting & Cloud Services  </a></li>
                                        <li><a className="dropdown-item" href="#services"> Web Designing & Development </a></li>
                                        <li><a className="dropdown-item" href="#services"> Hardware & Software Support  </a></li>
                                        <li><a className="dropdown-item" href="#services"> Refurbished Dealer(Desktop, laptop, Networking, Server) </a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" to="#services">Web Design </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#aboutid">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#team">Our Team </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact </a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

            {/* Navbar ending  */}

            {/* slider starting  */}
            {/* <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" className='text-danger' data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" className='text-danger' data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active pt-5">
                <img src={slider1} className="d-block w-100 hello" alt="..."/>
                <div className="carousel-caption">
                    <h5 className='text-dark fw-bold'>Welcome To SE-Enterprises </h5>
                    <p className='text-dark fw-bold'>DEALER & IT SERVICE COMPUTER PART PROVIDER</p>
                    <p><a href="#" className='btn btn-danger mt-3'>Learn More...</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={slider2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5 className='text-white fw-bold'>Welcome To SE-Enterprises </h5>
                    <p className='fw-bold'>DEALER & IT SERVICE PROVIDER</p>
                    <p><a href="#" className='btn btn-danger mt-3'>Learn More...</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={slider3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5 className='text-danger fw-bold'>Welcome To SE-Enterprises </h5>
                    <p className='fw-bold'>DEALER & IT SERVICE PROVIDER</p>
                    <p><a href="#" className='btn btn-danger mt-3'>Learn More...</a></p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> */}


            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active pt-5" data-bs-interval="4000">
                        <img src={slidere} className="d-block w-100 hello" alt="..." />
                        <div className="carousel-caption">
                            <h1 className='txt-slider'>Computer PC on Rent </h1>
                            <h5 className='text-dark fw-bold'>Welcome To SE-Enterprises </h5>
                            <p className='text-dark fw-bold'>DEALER & IT SERVICE COMPUTER PART PROVIDER</p>
                            {/* <p><a href="#" className='btn btn-danger mt-3'>Learn More...</a></p> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>





            {/* slider ending  */}


        </>
    )
}

export default Navbar