import React from 'react';
import Feature from './Feature';
import NavBar from './NavBar';
import Slidebar from './Slidebar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Slidebar/>
            <Feature/>
        </div>
    );
};

export default Home;