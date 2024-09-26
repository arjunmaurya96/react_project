import React from 'react'
import './Team1.css'
import team1 from '../../assets/img/team1.jpg'
import team2 from '../../assets/img/team4.jpg'

const Team1 = () => {
    return (
        <>
            <section id='team' className='team section-bg'>
                <div className="container">
                    <div className="section-title sectio">
                        <h1 className='fw-bold text-dark '> TEAM <span className='text-danger'>SE-ENTERPRISES </span> </h1>
                        <p> We have good staff for all feilds who handle all the work wel... </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team1} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Eknath Said  </h4>
                                    <span> CEO  </span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team2} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Ravendra Tripathi </h4>
                                    <span> Accountant  </span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team1} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Shivam Seth  </h4>
                                    <span> Software Engineer </span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team1} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Devendra Gupta  </h4>
                                    <span> Ajinkya Patil  </span>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team2} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Ajinkya Patil  </h4>
                                    <span> Hardware Engineer   </span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={team1} className='img-fluid' alt="" />
                                    <div className='social'>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className='member-info'>
                                    <h4> Suneel yadav  </h4>
                                    <span> Salse executive  </span>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      
                        </div>

                    </div>
                

                </div>

            </section>

        </>
    )
}

export default Team1