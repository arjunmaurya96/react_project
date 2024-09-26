import React, { useState } from 'react';
import './style.css';
import gallery1 from '../../assets/img/seimg/gallery1.jpg';
import gallery2 from '../../assets/img/seimg/gallery2.jpg';
import gallery3 from '../../assets/img/seimg/gallery3.jpg';
import gallery4 from '../../assets/img/seimg/gallery4.jpg';
import gallery5 from '../../assets/img/seimg/gallery5.jpg';


const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [gallery1, gallery5, gallery1, gallery5, gallery1, gallery5,gallery3,gallery2];

  return (
    <div className="container gallery">
      <div className="row mb-5">
        <div className="col-md-12 sectio">
          <h1 className="text-center mx-auto fw-bold mt-5">
            <span className='text-dark'>GALLERY </span> <span className="text-danger">SE-ENTERPRISES</span>
          </h1>
          {/* <hr className="w-25 m-auto styled-hr" /> */}
        </div>
      </div>

      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="img-fluid shadow-lg"
              onClick={() => handleShow(image)}  // Open the modal on image click
              style={{ cursor: 'pointer' }}  // Add pointer cursor on hover
            />
          </div>
        ))}
      </div>

      {/* Modal for image popup */}
      <div className={`modal ${show ? 'd-block' : ''}`} tabIndex="-1" onClick={handleClose}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> SE-Enterprises  </h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {currentImage && <img src={currentImage} alt="Popup Image" className="img-fluid" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
