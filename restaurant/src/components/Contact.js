import React from 'react'

function Contact() {
    return (
        <section className="contact" id='contact'>
            <h1 className="heading">
                <span>CONTACT</span>us
            </h1>
            <div className="row">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.678872397936!2d73.94886958573609!3d18.558729616132883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707632238677!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <form>
                    <h1>get in touch</h1>
                    <div className="inputBox">
                        
                           <span className="fas fa-user"></span>
                           <input type='text' placeholder='name'/>
                    </div>
                    <div className="inputBox">
                        
                           <span className="fas fa-envelope"></span>
                           <input type='email' placeholder='email'/>
                    </div>
                    <div className="inputBox">
                    
                           <span className="fas fa-phone"></span>
                           <input type='phone' placeholder='phone'/>
                       
                        <br />
                    </div>
                        <input className='submitbtn' type="submit" value="contact now"/>
                </form>

            </div>
        </section>
    )
}

export default Contact