import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="about-section">
            <section style={{backgroundColor: '#172A45'}} className="p-5 mt-5 text-center text-light">
            <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h5 className="text-light">What is <span style={{ color: '#ffb400' }}>Next</span></h5>
            </section>
                <h2>Get In Touch</h2>
                <p>I'd Love to hear from you .Whether you have <br/> a question or just want to say hi,<br/> fell free to drop a message. I'll try my best to get back to you!</p>
               <Link to="contact" className="text-decoration-none">
                  <button className="btn btn-warning text-light">Inbox Me</button>
               </Link>
            </section>
            
        </div>
    );
};

export default Contact;