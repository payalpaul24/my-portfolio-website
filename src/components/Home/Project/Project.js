import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import projectOne from "../../../img/projects/projectOne.png";
import projectOneTwo from "../../../img/projects/projectOne2.png";
import projectOneThree from "../../../img/projects/projectOne3.png";
import projectOneFour from "../../../img/projects/projectOne4.png";
import projectTwo from "../../../img/projects/projectTwo1.png";
import projectTwoOne from "../../../img/projects/projectTwo2.png";
import projectTwoThree from "../../../img/projects/projectTwo3.png";
import projectThree from "../../../img/projects/projectThree1.png";
import projectThreeOne from "../../../img/projects/projectThree2.png";
import projectThreeTwo from "../../../img/projects/projectThree3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Project = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="about-section p-5">
            <div className="d-flex justify-content-between pb-3">
                <h1 className="text-light">My<span style={{ color: '#ffb400' }}> Projects</span></h1>
                <Link to="/allProject">
                 <button  className="btn btn-default text-center" style={{ borderColor: '#64ffda', color: '#64ffda', backgroundColor: 'cyan' }}><a href="/">See All</a></button>
                </Link>
            </div>
            <div className='row p-3'>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 p-2">
                    <Slider {...settings} className="" >
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectOne} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectOneTwo} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectOneThree} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectOneFour} alt="" />
                        </div>
                    </Slider>
                </div>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 text-left">
                    <h4 class="text-uppercase  mt-2">
                        <span style={{ color: '#ffb400' }}>Creative Agency</span>
                    </h4>
                    <p className="text-light mt-2">A full-stack educational app Where users can see what online courses are offered to them. Where user can order any course and give feedback. Admin control whole system and add services. Admin Dashboard / User Dashboard.
                </p>
                    <div className="mt-4 text-left">
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React Router</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Bootstrap</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">NodeJs</button>
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Express</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">MongoDB</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Firebase</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Heroku</button>
                    </div>
                    <div className="d-flex mt-4">
                        <a style={{ color: 'cyan' }} href="https://github.com/payalpaul24/creative-agency-app-client">Github</a>
                        <a style={{ color: 'cyan' }} className="ml-4" href="https://creative-agency-7af02.web.app/">Live Site</a>
                    </div>
                </div>
            </div>
            <div className='row p-3'>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 p-2">
                    <Slider {...settings} className="" >
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectTwo} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectTwoOne} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectTwoThree} alt="" />
                        </div>
                    </Slider>
                </div>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 text-left">
                    <h4 class="text-uppercase  mt-2">
                        <span style={{ color: '#ffb400' }}>Volunteer Network</span>
                    </h4>
                    <p className="text-light mt-2">A MERN-stack app where volunteers work for many charities. Where user can register as a volunteer task. Where registered can show their registered task based on email & cancel their task. Lastly, admin control the whole system with show all details of user & deleted any user.
                </p>
                    <div className="mt-4 text-left">
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React Router</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Bootstrap</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">NodeJs</button>
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Express</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">MongoDB</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Firebase</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Heroku</button>
                    </div>
                    <div className="d-flex mt-4">
                        <a style={{ color: 'cyan' }} href="https://github.com/payalpaul24/volunteer-network-client">Github</a>
                        <a style={{ color: 'cyan' }} className="ml-4" href="https://volunteer-network-app-8445c.web.app/">Live Site</a>
                    </div>
                </div>
            </div>
            <div className='row p-3'>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 p-2">
                    <Slider {...settings} className="" >
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectThree} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectThreeTwo} alt="" />
                        </div>
                        <div className="wdt">
                            <img style={{ height: '290px', width: '423px' }} src={projectThreeOne} alt="" />
                        </div>
                    </Slider>
                </div>
                <div style={{backgroundColor:'rgb(23, 42, 69)'}} className="col-md-6 text-left">
                    <h4 class="text-uppercase  mt-2">
                        <span style={{ color: '#ffb400' }}>Travel Guru</span>
                    </h4>
                    <p className="text-light mt-2">A Tourist hotel booking website. Where we can booking a hotel for our upcoming tourist place. When we registered a hotel then it will suggestion place based on your selected place. Lastly, google map will assist you to make your travel experience smoother.</p>
                    <div className="mt-4 text-left">
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React Router</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Bootstrap</button>
                        <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Firebase</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Google Map</button>
                    </div>
                    <div className="d-flex mt-4">
                        <a style={{ color: 'cyan' }} href="https://github.com/payalpaul24/travel-guru-app">Github</a>
                        <a style={{ color: 'cyan' }} className="ml-4" href="https://travel-guru-2574c.web.app/">Live Site</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;