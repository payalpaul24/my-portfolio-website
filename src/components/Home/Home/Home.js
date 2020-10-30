import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../ContactDetails/Footer/Footer';
import Header from '../Header/Header';
import MyAchievement from '../MyAchievement/MyAchievement';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Project></Project>
            <Blog></Blog>
            <MyAchievement></MyAchievement>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;