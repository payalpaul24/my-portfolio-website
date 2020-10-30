import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../img/profileTwos.jpg';
import './HeaderMain.css';
import Typed from 'react-typed';


const HeaderMain = () => {
    const textLines = [
        `Front End Developer`,
        `MERN Stack Developer`,
        `React Developer`
      ];

    return (
        <div className="container-fluid headerMain mb-4">
            <main className="row d-flex align-items-center">
                <div className="col-md-4 col-sm-6 image">
                    <img className="img-fluid" src={profile} alt="" />
                </div>
                <div className="text col-md-5 col-sm-12  offset-md-1 pt-4 d-block text-left">
                    <h5 class="text-uppercase text-light open-sans-font mb-0 d-block d-lg-block">hi there !</h5>
                    <h1 class="text-uppercase  mt-2">
                        <span className="text-light">I'm</span>
                        <span style={{ color: '#ffb400' }}> Payal Paul</span>
                    </h1>

                    <div style={{ fontSize: "40px", fontFamily: "Roboto Mono" }} className="text-light">
                        <div className="">
                            <Typed
                                strings={['A']}
                                typeSpeed={40}
                            />
                            <Typed className="text-warning ml-3" strings={textLines} typeSpeed={60} backSpeed={60} loop />
                        </div>
                    </div>
                    <p className="text-light mt-2">A talented IT professional with a passion for tailored solutions seek the position of
                    Web Developer in a thriving, exciting, and growing company. Comes with a
                    Bachelor’s degree in Computer Science to be able to work for an encouraging and
                    stable company as a Front End Developer that will assist me in developing,
                    improving, and obtaining the necessary skills to become the best developer possible.</p>
                    <div className=" button">
                        <Link to="/about">
                            <a href="/about" className="btn btn-about">About me</a>
                        </Link>
                        <a href="https://drive.google.com/uc?export=download&id=1j9uAy5d23W4NerGGgxkkHKPrVzgtM-Bp" download="Payal_Paul-Resume-Updated.pdf" className="btn btn-about ml-2">Resume</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;