import React from 'react'

const Services = () => {
  return (
  <>
     {/* services section  */}
    <section class="services py-5 bg-light" id="services">
        <div class="container">
            <div class="text-center my-5">
                <h1> Our <span class="text-primary"> Services </span> </h1>
                <hr  class="w-25 m-auto"/>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            {/* <i class="fa-solid fa-users bg-primary p-2 text-white rounded mb-2"></i> */}
                            <i class="fa-solid fa-laptop  bg-primary p-2 text-white rounded mb-2"></i>
                            <h5 class="card-title"> It MainTenance  </h5>
                            <p class="card-text">The process of keeping equipment, machinery, or systems in proper working condition through regular inspection and repairs..
                            </p>
                            {/* <a href="#" class="btn btn-primary">Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card bg-primary text-white h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-code bg-white p-2 text-dark rounded mb-2"></i>
                            <h5 class="card-title"> Networking & Cabling  </h5>
                            <p class="card-text"> The process of connecting devices through physical cables and infrastructure to enable data, resource sharing, and communication within a network.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-photo-film bg-primary p-2 text-white rounded mb-2"></i>
                            <h5 class="card-title"> Rental Services  </h5>
                            <p class="card-text">  Businesses that provide temporary access to goods, equipment, or property in exchange for payment over a specified period.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-users bg-primary p-2 text-white rounded mb-2"></i>
                            <h5 class="card-title"> CCTV Security Systems  </h5>
                            <p class="card-text"> Surveillance setups using cameras to monitor and record activity in real-time, enhancing security by preventing and documenting incidents.
                            </p>
                            {/* <a href="#" class="btn btn-primary">Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card bg-primary h-100 text-white">
                        <div class="card-body">
                            <i class="fa-solid fa-code bg-white p-2 text-dark rounded mb-2"></i>
                            <h5 class="card-title"> Telephonic Services  </h5>
                            <p class="card-text">Communication services enabling voice transmission over distances via telephones, including landlines, mobile networks, and internet-based calling systems.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-store bg-primary p-2 text-white rounded mb-2"></i>

                            <h5 class="card-title"> Web Hosting & Cloud Service  </h5>
                            <p class="card-text">Solutions that provide storage, management, and access to websites or applications on servers, either physically (web hosting) or virtually (cloud), ensuring online availability.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-users bg-primary p-2 text-white rounded mb-2"></i>
                            <h5 class="card-title"> Web Designing & Develoment   </h5>
                            <p class="card-text">The creation of visually appealing, user-friendly websites through design, coding, and functionality, ensuring optimal performance and responsiveness online.
                            </p>
                            {/* <a href="#" class="btn btn-primary">Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100 bg-primary text-white">
                        <div class="card-body">
                            <i class="fa-solid fa-code bg-white p-2 text-dark rounded mb-2"></i>
                            <h5 class="card-title"> Hardware & Software Support   </h5>
                            <p class="card-text">Assistance with troubleshooting, maintaining, and repairing computer hardware and software for optimal performance and issue resolution.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="fa-solid fa-store bg-primary p-2 text-white rounded mb-2"></i>

                            <h5 class="card-title"> Refurbished Delaer (Desktop, laptop, Networking, Server)  </h5>
                            <p class="card-text">A seller providing reconditioned desktops, laptops, networking equipment, and servers, offering affordable and reliable technology solutions.
                            </p>
                            {/* <a href="#" class="btn btn-primary"> Book Now!</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* services section ending   */}

  
  </>
  )
}

export default Services