import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from './Footer/Footer';

const ContactDetails = () => {
    return (
        <div className="about-section">
            <Navigation></Navigation>
        <section className="row p-5">
            <div className="col-md-5 text-center text-light">
                <h3>Let us handle your <br /> project, professionally.</h3>
                <p className="text-secondary">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
                <form action="https://script.google.com/macros/s/AKfycbzcagE-Pp5uONZ-zhTbuYrF4yUgSjpNhKHma-g/exec" method="POST" class="gform" data-email="payalpaul2436@gmail.com">
                    <div className="form-group">
                        <input style={{ height: '70px' }} type="text" className="form-control" placeholder="Your Email Address *" />
                    </div>
                    <div className="form-group">
                        <input style={{ height: '70px' }} type="text" className="form-control" placeholder="Your Name/Company's Name *" />
                    </div>
                    <div className="form-group">
                        <textarea style={{ height: '277px' }} className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                    </div>
                    <button style={{ height: '45px', width: '140px' }} className="btn btn-success ">Send</button>
                </form>
            </div>
        </section>
        <br/>
            <Footer></Footer>
        </div>
    );
};

export default ContactDetails;