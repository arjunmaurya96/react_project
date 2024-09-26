import React from 'react'
import './style.css';

const Contact = () => {
  return (
    <>



      <div className="section-head hds col-sm-12">
        <h4><span>CONTACT</span> US  </h4>


      </div>
      <div className="contact-in my-5">
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30164.79814362682!2d72.88691832551196!3d19.081326814013142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c631dcb145d9%3A0xed2e7c2011a11141!2sGhatkopar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727341195824!5m2!1sen!2sin" width="100%" height="auto" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-form">
          <h1>SE-ENTERPRISES </h1>
          <form action="">
            <input type="text" placeholder='Name' className='contact-form-txt' />
            <input type="text" placeholder='Email' className='contact-form-txt' />
            <textarea placeholder='Message' className='contact-form-txtarea'></textarea>
            <input type="submit" name='Submit' className='contact-form-btn' />
          </form>
        </div>
      </div>



    </>
  )
}

export default Contact