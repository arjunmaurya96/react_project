import React from 'react'
import './About.css';

import aboutA from '../../assets/img/seimg/about1.jpeg'
// import aboutB from '../../assets/img/seimg/aboutB.jpg'
import aboutD from '../../assets/img/seimg/aboutD.jpg'
import aboutC from '../../assets/img/seimg/aboutC.jpg'

const About = () => {
  return (
    <>
      {/* about section */}

      <div className="container">

        <div className="section-head col-sm-12"  id='aboutid'>
          <h4><span>ABOUT </span> SE-ENTERPRISES </h4>
          

        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">

            <p className="text-capitalize" style={{ textAlign: "justify" }}>
              SE-Enterprises is a premier IT maintenance and services company committed to providing cutting-edge technology solutions to businesses of all sizes.
              We specialize in a wide range of services,
              including IT support, network setup and cabling, hardware repairs, software troubleshooting,
              and cloud infrastructure management. Our expert team is dedicated to delivering customized solutions,
              ensuring that your business runs smoothly with minimal downtime.
              In addition to maintenance, we offer specialized services such as CCTV security systems, web hosting, telephony,
              and comprehensive web design and development. We also supply refurbished hardware like desktops, laptops,
              and networking equipment, offering cost-effective options for businesses.
              At SE-Enterprises, our mission is to enhance operational efficiency and safeguard your IT infrastructure.
              With a focus on reliability, security, and client satisfaction, we are the technology partner you can trust
              to help your business grow and stay competitive in today’s digital world...
            </p>
            <button type="button" className="btn btn-light">More about us </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" style={{ height: "420px" }}>
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src={aboutA} className="d-block w-100 img-fluid img-thumbnail shadow" style={{ height: '420px', objectFit: 'cover' }} alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={aboutD} className="d-block w-100 img-fluid img-thumbnail shadow" style={{ height: '420px', objectFit: 'cover' }} alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={aboutC} className="d-block w-100 img-fluid img-thumbnail shadow" style={{ height: '420px', objectFit: 'cover' }} alt="..." />
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>



      {/* 
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <p class="p-4" style={{textAlign:"justify"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid dolorem sunt
        voluptates quisquam quam culpa dolorum soluta molestiae natus fugit, dolore ab nisi ea 
        reiciendis architecto? Vel veritatis voluptatem, fugit aut laudantium autem molestias, 
        cumque nisi assumenda rem perspiciatis ut earum iure. Optio reprehenderit odit aut, totam
        aperiam ipsum vero ex perspiciatis, quia modi quibusdam officiis eveniet. Consectetur 
        nulla earum eveniet, deserunt unde similique soluta odit molestiae amet. Fugiat,
        reprehenderit rerum ipsum vel nisi dolorum facilis nemo cupiditate ipsa fuga laboriosam!
        Recusandae inventore eius quas, numquam laudantium ipsum eligendi cupiditate porro 
        accusantium repellendus debitis? Earum explicabo sapiente atque. ipsum, dolor sit amet
        consectetur adipisicing elit. Quisquam corrupti fuga, esse nostrum veniam deserunt odio
        sunt tenetur eaque blanditiis quis. Quaerat fugiat, nulla cumque aliquid quidem  
        provident repellendus accusamus.
        <i class="fa-brands fa-facebook-f iconim"></i>
        <i class="fa-brands fa-linkedin iconim"></i>
      </p>
    </div>
    <div class="col-md-6 p-4">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/logo1.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="img/logo2.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="img/logo3.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="img/logo4.jpg" class="d-block w-100" alt="image"/>
          </div> 
          <div class="carousel-item">
            <img src="img/logo5.jpg" class="d-block w-100" alt="image"/>
          </div>
        </div>
      </div>
   
      
    </div>
  </div>
</div> */}

      {/* About section ending */}

    </>
  )
}

export default About