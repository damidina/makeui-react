import React from 'react';
import Hero from './hero/Hero';
import HowItWorks from './HowItWorks';
import Customize from './customize/Customize';
import UpcomingFeatures from './UpcomingFeatures';
import Timeline from './Timeline';

const LandingPage = () => (
    <div>
        <Hero />
        <HowItWorks />
        <Customize />
        <UpcomingFeatures />
        <Timeline />
    </div>
);

export default LandingPage;