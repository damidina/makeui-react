import React from 'react';
import Carousel from 'nuka-carousel';

class HowItWorks extends React.Component {

  state = {
    currentSlide: 1,
    displayAll: true,
  };

  handleResize = () => {
    const size = window.innerWidth
    if (size <= 800) {
      this.setState(({ displayAll: false }))
    } else {
      this.setState(({ displayAll: true }))
    }
  };

  afterSlide = (e) => {
    this.setState(({ currentSlide: e + 1 }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div className="how-it-works">
        <div className="grid-container" style={{ height: '100%', width: '100%' }}>
          <h1 className="full-width section-heading white center-text"
            style={!this.state.displayAll ?
              { marginBottom: '4rem', maxWidth: '100%', fontSize: '32px' }
              : { marginBottom: '6rem', maxWidth: '100%' }
            }>How It Works</h1>


          {this.state.displayAll &&
            <div class="videomain">
            <video class="video-container video-container-overlay" autoplay="" loop="" muted="" data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src="mov_bbb.mp4">
</video>
</div>
            <div className="grid-3 flex-column align-center">
              <div className="img-box">
                <img src="images/MakeUI_Icons-Customize.svg" />
              </div>
              <h2 className="sub-heading white">CUSTOMIZE</h2>
              <p className="paragraph white center-text" style={{ width: '250px' }}>Pick a template and input your brand identity style in our customizer.</p>
            </div>
          }
          {this.state.displayAll &&
            <div className="grid-3 flex-column align-center">
              <div className="img-box">
                <img src="images/MakeUI_Icons-Download.svg" />
              </div>
              <h2 className="sub-heading white">DOWNLOAD</h2>
              <p className="paragraph white center-text" style={{ width: '250px' }}>Select your package, purchase, and download your UI kit.</p>
            </div>
          }
          {this.state.displayAll &&
            <div className="grid-3 flex-column align-center">
              <div className="img-box">
                <img src="images/MakeUI_Icons-Sketch.svg" />
              </div>
              <h2 className="sub-heading white">SKETCH</h2>
              <p className="paragraph white center-text" style={{ width: '250px' }}>Use your styled UI kit to start prototyping your app in Sketch.</p>
            </div>
          }
          {!this.state.displayAll &&
            <div style={{ gridColumn: 'span 12' }}>
              <Carousel
                slideWidth={1}
                renderBottomCenterControls={() => { }}
                renderCenterLeftControls={() => { }}
                renderCenterRightControls={() => { }}
                afterSlide={this.afterSlide}
                cellAlign="center"
                autoplay={true}
                wrapAround={true}
              >
                <div className="grid-3 flex-column align-center">
                  <div className="img-box">
                    <img src="images/MakeUI_Icons-Customize.svg" />
                  </div>
                  <h2 className="sub-heading white">CUSTOMIZE</h2>
                  <p className="paragraph white center-text" style={{ width: '60vw' }}>Quickly input your brand identity style into our customizer.</p>
                </div>

                <div className="grid-3 flex-column align-center">
                  <div className="img-box">
                    <img src="images/MakeUI_Icons-Download.svg" />
                  </div>
                  <h2 className="sub-heading white">DOWNLOAD</h2>
                  <p className="paragraph white center-text" style={{ width: '60vw' }}>Select your package, purchase, and download your UI kit.</p>
                </div>

                <div className="grid-3 flex-column align-center">
                  <div className="img-box">
                    <img src="images/MakeUI_Icons-Sketch.svg" />
                  </div>
                  <h2 className="sub-heading white">SKETCH</h2>
                  <p className="paragraph white center-text" style={{ width: '60vw' }}>Use your styled UI kit to start prototyping your app in Sketch.</p>
                </div>
              </Carousel>
            </div>
          }

          {!this.state.displayAll &&
            <div className="full-width" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="circle-pagination" style={this.state.currentSlide === 1 ? selected : normal}></div>
                <div className="circle-pagination" style={this.state.currentSlide === 2 ? selected : normal}></div>
                <div className="circle-pagination" style={this.state.currentSlide === 3 ? selected : normal}></div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

const selected = {
  border: '3px solid white',
  background: '#FFD692',
};

const normal = {
  border: '3px solid white',
  background: 'black',
}

export default HowItWorks;
