import React from 'react';
import blogOne from '../../../img/blog/blog-post-1.jpg';
import Footer from '../ContactDetails/Footer/Footer';
import Navigation from '../Navigation/Navigation';

const BlogDetails = () => {
    return (
        <div>
            <section class="about-section">
                <Navigation></Navigation>
                <div className="d-flex justify-content-between pb-3">
                    <h1 className="text-light">Blog<span style={{ color: '#ffb400' }}> Details</span></h1>
                </div>
                <div class="container text-light">
                    <div class="row">
                        <article class="col-12">
                            <div class="meta open-sans-font">
                                <span><i class="fa fa-user"></i> Payal Paul</span>
                                <span class="date ml-5"><i class="fa fa-calendar"></i> 3 January 2020</span>
                                <span><i class="fa fa-tags ml-5"></i> React, React Router, Firebase, design</span>
                            </div>
                            <h1 class="text-uppercase text-capitalize mt-1">ReactJs</h1>
                            <div className="mt-5">
                                <img src={blogOne} className="img-fluid" alt="" />
                                <div class="col-md-10 m-auto blog-excerpt open-sans-font pb-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default BlogDetails;