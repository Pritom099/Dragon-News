import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div className='my-8'>
            <header>
                <Header></Header>
                {
                    import.meta.env.VITE_name
                }
            </header>
            <section className='w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-5  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state=="loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside  className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;