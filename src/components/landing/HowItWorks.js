import React from 'react';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="content-container flex-column">
        <div className="center-h">
          <h1 className="section-heading white">How It Works</h1>
        </div>
        <div className="flex-row">
          <div className="flex-third">
            <div className="img-box">
              <img src="images/MakeUI_Icons-Customize.svg" />
            </div>
            <h2 className="sub-heading white">CUSTOMIZE</h2>
            <p className="paragaph white center-text">
              Quickly input your brand identity style into out customizer.
            </p>
          </div>
          <div className="flex-third">
            <div className="img-box">
              <img src="images/MakeUI_Icons-Download.svg" />
            </div>
            <h2 className="sub-heading white">DOWNLOAD</h2>
            <p className="paragaph white center-text">
              Select your package, purchase, and download your UI kit.
            </p>
          </div>
          <div className="flex-third">
            <div className="img-box">
              <img src="images/MakeUI_Icons-Sketch.svg" />
            </div>
            <h2 className="sub-heading white">SKETCH</h2>
            <p className="paragaph white center-text">
              Use your styled UI kit to start prototyping your app in sketch.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;