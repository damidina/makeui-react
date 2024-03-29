import React from "react";
import Hero from "./hero/Hero";
import HowItWorks from "./HowItWorks";
import Customize from "./customize/Customize";
import UpcomingFeatures from "./UpcomingFeatures";
import Timeline from "./Timeline";
import Footer from "./Footer";

class LandingPage extends React.Component {
  state = {
    shouldScroll: false
  };

  componentDidMount() {
    window.loading_screen.finish();
  }

  onTestItOutClick = () => {
    this.setState({ shouldScroll: true });
    setInterval(() => {
      this.setState({ shouldScroll: false });
    }, 2000);
  };

  render() {
    return (
      <div>
        <Hero onTestItOutClick={this.onTestItOutClick} />
        <HowItWorks />
        <Customize shouldScroll={this.state.shouldScroll} />
        <UpcomingFeatures />
        <Timeline />
        <Footer onMakeClick={this.onTestItOutClick} />
      </div>
    );
  }
}

export default LandingPage;
