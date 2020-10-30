import React from 'react';
import './About.css';
import profile from '../../../img/profileTwos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Footer from '../ContactDetails/Footer/Footer';

const About = () => {
    return (
        <div className="about-section">
            <Navigation></Navigation>
            <div>
                <h1 className="text-light">About<span style={{ color: '#ffb400' }}> Me</span></h1>
                <main className="container-fluid row d-flex align-items-center about">
                    <div className="col-md-6">
                        <div style={{ backgroundColor: '#ffb400', width: '305px', height: '305px', borderRadius: '50%' }} className="m-auto p-1">
                            <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} className="img-fluid" src={profile} alt="" />
                        </div>
                        <h1 class="text-uppercase  mt-2">
                            <span className="text-light">I'm</span>
                            <span style={{ color: '#ffb400' }}> Payal Paul</span>
                        </h1>
                        <p className="text-light text-left mt-2">A talented IT professional with a passion for tailored solutions seek the position of
                        Web Developer in a thriving, exciting, and growing company. Comes with a
                        Bachelor’s degree in Computer Science to be able to work for an encouraging and
                        stable company as a Front End Developer that will assist me in developing,
                improving, and obtaining the necessary skills to become the best developer possible.</p>
                        <a href="https://drive.google.com/uc?export=download&id=1j9uAy5d23W4NerGGgxkkHKPrVzgtM-Bp" download class="btn btn-about">Download Resume</a>
                    </div>
                    <div className="text-light col-md-5 underline mt-5 pb-5">
                        <h4 className="float-left" style={{ color: '#ffb400' }}>TECHNICAL PROFICIENCIES</h4>
                        <br />
                        <br />
                        <div className="mb-4">
                            <h4 className="text-left">Expertise:</h4>
                            < hr />
                            <div className="mt-4 text-left">
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">JavaScript</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">ES6</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React.js</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">REST API</button>
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React Bootstrap</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Bootstrap</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">HTML5</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">CSS3</button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-left">Comportable:</h4>
                            < hr />
                            <div className="mt-4 text-left">
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Node.js</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Express.js</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">MongoDB</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Material UI</button>
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">JSON</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">SASS</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">PHP</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">MySQL</button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-left">Familiar:</h4>
                            < hr />
                            <div className="mt-4 text-left">
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Redux.js</button><button className="bg-secondary text-light p-1 mr-2">GraphQL</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">jQuery</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">AJAX</button>
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">React Native</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Python</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">C</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">C++</button>
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Java</button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-left">Tools:</h4>
                            < hr />
                            <div className="mt-4 text-left">
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Git</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Create React App</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">NPM</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">VSCode</button>
                                <button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Firebase</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Netlify</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Heroku</button><button style={{ borderRadius: '5px' }} className="bg-secondary text-light p-1 mr-2">Chrome Dev tool</button>
                            </div>
                        </div>
                    </div>

                    
                    <div class="row text-light m-auto">
                        <div style={{maeginTop:'150px'}} className="col-12">
                            <h3 style={{ color: '#ffb400' }} class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
                        </div>
                        <div class="col-lg-5 offset-md-1 m-15px-tb pt-4">
                            <div className="resume-box text-left">
                                <ul>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2020 - Present</span>
                                        <h5 class="poppins-font text-uppercase">Front End Developer <span class="place open-sans-font">React Js</span></h5>
                                        <p class="open-sans-font">Front End Developer that will assist me in developing, improving, and obtaining the necessary skills to become the best developer possible.</p>
                                    </li>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2015 - 2018</span>
                                        <h5 class="poppins-font text-uppercase">UI/UX Designer & PHP Developer <span class="place open-sans-font">Sheikh Kamal IT Project</span></h5>
                                        <p class="open-sans-font">Worked with PHP, MySQL, CSS, javascript, ajax and XHTML to build a full web 2.</p>
                                    </li>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2018 - 2020</span>
                                        <h5 class="poppins-font text-uppercase">Certified Ethical Hacker & Cyber Security Specialist <span class="place open-sans-font">Arena Web Security & TechHacker Pre-Hacking Course</span></h5>
                                        <p class="open-sans-font">I'm able to Work with Web Pentesting, Vulnerability assessment,Web Shell,Malware Detection</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-md-1 m-15px-tb pt-4">
                            <div class="resume-box text-left">
                                <ul>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2019</span>
                                        <h5 class="poppins-font text-uppercase">Computer Science & Engineering Degree <span class="place open-sans-font">Britannia University</span></h5>
                                        <p class="open-sans-font">To become a successful professional in the field of Information Technology by utilizing my skills and enable further personal and professional development and work towards the prosperity of the organization</p>
                                    </li>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2018-2020</span>
                                        <h5 class="poppins-font text-uppercase">Ethical Hacking & Cyber Security<span class="place open-sans-font">Arena Web Security</span></h5>
                                        <p class="open-sans-font">Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.</p>
                                    </li>
                                    <li>
                                        <div class="iconss">
                                            <FontAwesomeIcon className="icons" icon={faBriefcase} />
                                        </div>
                                        <span class="time open-sans-font text-uppercase">2019-2020</span>
                                        <h5 class="poppins-font text-uppercase">Techacker Pre Hacking & Exploitation <span class="place open-sans-font">Bittentech,India</span></h5>
                                        <p class="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <br/>
            <Footer></Footer>
        </div>
    );
};

export default About;