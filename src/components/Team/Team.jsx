import React from 'react'
import './style.css'
import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';

const Team = () => {
  return (
   <>
{/* Our Team Starting   */}
    <section class="team my-5 text-center" id="team">
        <div class="container">
            <div class="text-center my-5">
                <h1> Our <span class="text-primary"> Team </span> </h1>
                <hr class="w-25 m-auto"/>
            </div>
<div class="row">
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-down" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team2} class="img-fluid rounded-circle border border-primary p-2 h-25 imgsize" alt=""/>
              <h5 class="card-title mt-4"> Eknath Said  </h5>
              <p class="card-text"> CEO   </p>
              <a href="#" class="btn btn-primary">Read More </a>
            </div>
          </div>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team2} class="img-fluid rounded-circle border border-primary p-2 imgsize" alt=""/>
              <h5 class="card-title"> Shivam Seth  </h5>
              <p class="card-text"> Software Engineer   </p>
              <a href="#" class="btn btn-primary"> Read More </a>
            </div>
          </div>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-left" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team3} class="img-fluid rounded-circle border border-primary p-2 imgsize" alt=""/>
              <h5 class="card-title"> Devendra Gupta   </h5>
              <p class="card-text"> Hardware Engineer  </p>
              <a href="#" class="btn btn-primary"> Read More </a>
            </div>
          </div>
    </div>
  
</div>
<div class="row py-5">
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-down" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team4} class="img-fluid rounded-circle border border-primary p-2 imgsize" alt=""/>
              <h5 class="card-title mt-4"> Ajinkya Patil    </h5>
              <p class="card-text"> Hardware Engineer   </p>
              <a href="#" class="btn btn-primary">Read More </a>
            </div>
          </div>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team2} class="img-fluid rounded-circle border border-primary p-2 imgsize" alt=""/>
              <h5 class="card-title"> Suneel yadav   </h5>
              <p class="card-text"> Sales Executive    </p>
              <a href="#" class="btn btn-primary"> Read More </a>
            </div>
          </div>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="200">
        <div class="card">
            <div class="card-body">
                <img src={team2} class="img-fluid rounded-circle border border-primary p-2 imgsize" alt=""/>
              <h5 class="card-title"> Ravendra Tripathi   </h5>
              <p class="card-text"> Sales Executive    </p>
              <a href="#" class="btn btn-primary"> Read More </a>
            </div>
          </div>
    </div>
  
  
</div>

        </div>


    </section>

    {/* contact form starting */}


   </>
  )
}

export default Team