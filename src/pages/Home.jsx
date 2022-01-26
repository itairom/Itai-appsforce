import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export const Home = () => {
    const { isDark } = useSelector(state => state.appModule)


    useEffect(() => {
    }, []);


    return (
        <section className={isDark ? 'main-container dark' : 'main-container'}>
            <div className='home-container'>
                <h1>Home</h1>

            </div>

        </section>
    )
}