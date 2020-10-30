import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cerOne from "../../../img/projects/cerOne.png";
import cerTwo from "../../../img/projects/cerTwo.png";
import cerThree from "../../../img/projects/cerThree.png";

const MyAchievement = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
    }

    return (
        <div>
            <section style={{ backgroundColor: '#0F0F0F' }} className="pb-4 pt-3">
                <div style={{ backgroundColor: '#172A45' }} className="pb-5">
                    <div className="text-center p-5">
                        <h2 className="text-light">Here are some of<span style={{ color: '#ffb400' }}> My Achievements</span></h2>
                    </div>
                    <div className='container' >
                        <Slider {...settings} >
                            <div className="wdt">
                                <img style={{ height: '290px', width: '423px' }} src={cerOne} alt="" />
                            </div>
                            <div className="wdt">
                                <img style={{ height: '290px', width: '423px' }} src={cerTwo} alt="" />
                            </div>
                            <div className="wdt">
                                <img style={{ height: '290px', width: '423px' }} src={cerThree} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyAchievement;