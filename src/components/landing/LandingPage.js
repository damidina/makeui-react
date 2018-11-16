import React from 'react';
import Hero from './hero/Hero';
import HowItWorks from './HowItWorks';
import CustomizeSection from './CustomizeSection';
import UpcomingFeatures from './UpcomingFeatures';
import Timeline from './Timeline';
import Footer from './Footer';

class LandingPage extends React.Component {

    state = {
        shouldScroll: false
    }

    onTestItOutClick = () => {
        this.setState(({ shouldScroll: true }));
        setInterval(() => { this.setState(({ shouldScroll: false })); }, 2000)
    };

    render() {
        return (
            <div>
                <Hero onTestItOutClick={this.onTestItOutClick} />
                <HowItWorks />
                <CustomizeSection shouldScroll={this.state.shouldScroll} />
                <UpcomingFeatures />
                <Timeline />
                <Footer onMakeClick={this.onTestItOutClick} />
            </div>
        );
    }


}

export default LandingPage;