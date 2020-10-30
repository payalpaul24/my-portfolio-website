import React from 'react';
import { Link } from 'react-router-dom';
import blogOne from '../../../img/blog/blog-post-1.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className="about-section">
            <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1 className="text-light">My <span style={{ color: '#ffb400' }}>Blog</span></h1>
            </section>
            <br />
            <section className="container mt-4">
                <div className="row d-flex">
                    <div className="col-md-4 mb-4 col-sm-6">
                        <Link className="text-decoration-none" to="blogDetails">
                            <div style={{ backgroundColor: '#172A45' }} class="card">
                                <img className="card-img-top" src={blogOne} alt="" />
                                <hr />
                                <div class="card-body text-light text-left">
                                    <h5 class="card-title">Simple Introduction to React.js</h5>
                                    <p class="card-text">React is a library that used to create awesome user interface … hence it is a library it need some other tools to make a complete web application</p>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <button class="btn btn-secondary"><a href="/" class="card-link text-light">React</a></button>
                                    <a href="/" class="card-link text-light">January 3 2020</a>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4 col-sm-6">
                        <Link className="text-decoration-none" to="blogDetails">
                            <div style={{ backgroundColor: '#172A45' }} class="card" >
                                <img className="card-img-top" src={blogOne} alt="" />
                                <hr />
                                <div class="card-body text-light text-left">
                                    <h5 class="card-title">JavaScript Summary !</h5>
                                    <p class="card-text">JavaScript is a single thread, prototype based programming language that support multiple programming paradigm like Object Oriented programming</p>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <button class="btn btn-secondary"><a href="/" class="card-link text-light">Javascript</a></button>
                                    <a href="/" class="card-link text-light">April 3 2020</a>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4 col-sm-6">
                        <Link className="text-decoration-none" to="blogDetails">
                            <div style={{ backgroundColor: '#172A45' }} class="card">
                                <img className="card-img-top" src={blogOne} alt="" />
                                <hr />
                                <div class="card-body  text-light text-left">
                                    <h5 class="card-title">How to use firebase Authentication with React </h5>
                                    <p class="card-text">This article is about serverless Authentication with firebase authentication in react </p>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <button class="btn btn-secondary"><a href="/" class="card-link text-light">Firebase</a></button>
                                    <a href="/" class="card-link text-light">Mar 3 2020</a>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;