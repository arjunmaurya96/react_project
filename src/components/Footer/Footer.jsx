import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark text-white pt-5 pb-4'>
                <div className='container text-center text-md-left'>
                    <div className='row text-center text-md-left'>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h3 className='text-uppercase fw-bold text-warning'> SE-Enterprises </h3>
                            <p className="text-center text-justify-custom">SE-Enterprises is an IT company providing innovative technology solutions, specializing in software development, digital transformation, and IT consulting services.</p>


                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start'>
                            <h5 className='text-uppercase font-weight-bold text-warning'>Quick Links  </h5>
                            <p>
                                <a href="#home" className='text-white' style={{ textDecoration: "none" }}> Home </a>
                            </p>
                            <p>
                                <a href="#aboutid" className='text-white' style={{ textDecoration: "none" }}> About us   </a>
                            </p>
                            <p>
                                <a href="#services" className='text-white' style={{ textDecoration: "none" }}> Services  </a>
                            </p>
                            <p>
                                <a href="#contact" className='text-white' style={{ textDecoration: "none" }}> Contact us   </a>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-start'>
                            <h5 className='text-uppercase font-weight-bold text-warning'> Services  </h5>
                            <p>
                                <a href="#services" className='text-white' style={{ textDecoration: "none" }}> It Maintenance   </a>
                            </p>
                            <p>
                                <a href="#services" className='text-white' style={{ textDecoration: "none" }}> Web Development    </a>
                            </p>
                            <p>
                                <a href="#services" className='text-white' style={{ textDecoration: "none" }}> Web Hosting  </a>
                            </p>
                            <p>
                                <a href="#services" className='text-white' style={{ textDecoration: "none" }}> Network & Cabling  </a>
                            </p>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-start'>
                            <h5 className='text-uppercase font-weight-bold text-warning'>Contact Us  </h5>
                            <p>
                            <i class="fa-solid fa-envelope"></i> info@saenterprises.in 
                            </p>
                        
                            <p>
                                <i class="fa-solid fa-phone"></i> Nature : It Based Company  
                            </p>
                            <p>
                            <i class="fa-solid fa-location-dot"></i> Office Address: 102, B30, <span className='ps-4'>Ghatkoper(W)</span>  
                            </p>
                        </div>

                    </div>
                    <hr  className='mb-4'/>
                    <div className='row align-items-center'>
                        <div className='col-md-7 col-lg-8'>
                            <p>Copyright: 2020 All rights reserved by: 
                                <a href="#" style={{textDecoration:"none"}}>
                                    <strong className='text-warning'> SE Enterprises  </strong>
                                </a>
                            </p>

                        </div>
                        <div className='col-md-5 col-lg-4'>
                            <div className='text-center text-md-right'>
                                <ul className='list-unstyled list-inline'>
                                    <li className='list-inline-item'>
                                        <a href="" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><i class="fa-brands fa-facebook"></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href="" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><i class="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href="" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><i class="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href="" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><i class="fa-brands fa-linkedin"></i></a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer