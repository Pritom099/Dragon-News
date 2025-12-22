import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='my-8'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-5  grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside  className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;