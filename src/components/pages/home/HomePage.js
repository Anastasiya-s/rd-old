import React from 'react';

import { Header } from '@components/core/header';
import { Footer } from '@components/core/footer';

import { TopSlider } from './components/top-slider';
import { AdvantagesList } from './components/advantages';
import { Usability } from './components/usability';
import { Features } from './components/features';
import { Booking } from './components/booking';
import { Map } from './components/map';


import styles from './styles.scss';

const HomePage = () => (
    <>
        <Header />
        <TopSlider />
        <AdvantagesList />
        <Usability />
        <Features />
        <Booking />
        <Map />
        <Footer />
    </>
);

export default HomePage;
