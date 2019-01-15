import React from 'react';
import { connect } from 'react-redux';
import { setBackgroundColor } from '../../../actions/background';
import { setColor } from '../../../actions/generate';
import { setTimeout } from 'core-js';
import rgbToHex from 'rgb-to-hex';

class Hero extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      const bg = this.heroBG.style.background
      const hex = `#${rgbToHex(bg)}`;
      this.props.setBackgroundColor(hex);
      this.props.setColor({ colorIndex: "01", colorValue: hex });
    }, 2000)
  }


  render() {
    return (
      <div ref={(r) => this.heroBG = r} id="hero-section-id" className="hero-section" style={{ background: this.props.background }}>
        <img
          src="images/makeui-logo.svg"
          alt="MakeUI"
          width={70}
          className="logo-makeui"
        />
        <a className="btn-test hide-mobile" style={{ cursor: 'pointer', zIndex: '999', right: 0, position: 'absolute', }} onClick={this.props.onTestItOutClick}>Test it out!</a>
        <div className="tagline">
          <p>
            Styled <br className="hide-desktop" />Sketch{" "}
            <br className="hide-mobile" />UI Kits for quick prototyping
        </p>
          <a style={{ cursor: 'pointer', zIndex: '999' }} onClick={this.props.onTestItOutClick} className="btn-test hide-desktop">
            Test it out!
        </a>
        </div>
        {/* Black circles */}
        <img
          src="images/circle-black.svg"
          className="circle-img circle-img-1 hide-mobile"
        />
        <img
          src="images/circle-black.svg"
          className="circle-img circle-img-2"
        />
        {/* Arm */}
        <div className="arm start">
          <div />
          <img src="images/hand.svg" width={64} id="hand" />
        </div>
        {/* Arrow */}
        <div className="arrow hide-mobile">
          <img src="images/right-arrow.svg" />
          <hr />
        </div>
        {/* Radio Button */}
        <div className="radio-button">
          <svg
            id="radio-button"
            data-name="radio-button"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 17.5 37.5"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1e{fill:none;}.cls-2e{clip-path:url(#clip-path);}.cls-3e{clip-path:url(#clip-path-2);}.cls-4e{clip-path:url(#clip-path-3);}.cls-5e{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}"
                }}
              />
              <clipPath id="clip-path">
                <path
                  className="cls-1e"
                  d="M-152.2-2306.1a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-152.2-2306.1Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  className="cls-1e"
                  d="M-170.2-3431.1a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-170.2-3431.1Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  className="cls-1e"
                  d="M-164.2-1184a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-164.2-1184Zm-15.8,42a12.7,12.7,0,0,1-11-12.4V-1180a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
            </defs>
            <title>radio-button</title>
            <circle
              vectorEffect="non-scaling-stroke"
              className="cls-5e"
              cx="8.5"
              cy="8.5"
              r={7}
            />
            <circle
              vectorEffect="non-scaling-stroke"
              cx="8.5"
              cy="8.5"
              r="3.5"
            />
            <circle
              className="cls-5e"
              cx={9}
              cy={29}
              r={7}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        {/* Row of Images and Caption */}
        <div className="uielement-4 uielement-4-1 hide-mobile">
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
        </div>
        <div className="uielement-4 uielement-4-2 hide-mobile">
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
          <div className="comp">
            <div className="rand-border-radius-3" />
            <hr align="left" />
          </div>
        </div>
        {/* Circles and Rectangles */}
        <div className="circle circle-1 round-makeui" />
        <div className="circle circle-2" />
        <div className="circle circle-3 hide-mobile" />
        <div className="circle circle-4 round-makeui" />
        <div className="rect rect-4 rand-border-radius-2" />
        <div className="rect rect-1 rand-border-radius hide-mobile" />
        {/* Video Player Interface */}
        <div className="rect rect-2">
          <img src="images/player_interface.svg" width={11} />
        </div>
        {/* MakeUI Button */}
        <div id="btn-makeui">
          <div className="rect rect-button-top" />
          <div className="rect rect-button-bottom" />
        </div>
        {/* Text and Button */}
        <div className="uielement-1 hide-mobile">
          <div className="hr-group">
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <div className="rect rect-3 rand-border-radius-2">
            <hr width="84%" />
          </div>
        </div>
        {/* Image and Text */}
        <div className="uielement-2	hide-mobile">
          <div style={{ width: "7%", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "white",
                border: "3px solid black"
              }}
              className="rand-border-radius-3"
            />
            <div
              className="hr-group"
              style={{ marginTop: 18, height: "20%", display: "block" }}
            >
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </div>
        {/* List */}
        <div className="uielement-3 square-makeui">
          <div className="rect">
            <div className="circle circle-5" />
          </div>
          <div className="rect">
            <div className="circle circle-5" />
          </div>
          <div className="rect">
            <div className="circle circle-5" />
          </div>
          <div className="rect">
            <div className="circle circle-5" />
          </div>
        </div>
        {/* Slider */}
        <div className="rect rect-5 hide-mobile">
          <div className="circle circle-black round-makeui" />
        </div>
        {/* Magnify Glass */}
        <div className="magnify-glass">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 43.2 43"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{clip-path:url(#clip-path-2);}.cls-4{clip-path:url(#clip-path-3);}.cls-5{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}"
                }}
              />
              <clipPath id="clip-path">
                <path
                  className="cls-1"
                  d="M-418.2-2159.1a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-418.2-2159.1Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  className="cls-1"
                  d="M-436.2-3284.1a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-436.2-3284.1Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  className="cls-1"
                  d="M-430.2-1037a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.3a12.6,12.6,0,0,1,10.7,12.3v29h3.6v-29A16.2,16.2,0,0,0-430.2-1037ZM-446-995a12.7,12.7,0,0,1-11-12.4V-1033a12.7,12.7,0,0,1,11,12.4Zm14-12.4A12.7,12.7,0,0,1-443-995v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
            </defs>
            <title>magnify</title>
            <rect
              x="15.8"
              y="28.4"
              width="30.3"
              height="4.56"
              transform="translate(30.8 -12.9) rotate(45)"
            />
            <circle
              className="cls-5"
              cx="16.8"
              cy="16.8"
              r="15.3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        {/* X */}
        <div className="x-icon hide-mobile">
          <svg
            id="x-icon"
            data-name="x-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 20.4 21.4"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1b,.cls-4b{fill:none;}.cls-2b{clip-path:url(#clip-path);}.cls-3b{clip-path:url(#clip-path-2);}.cls-4b{stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-5b{clip-path:url(#clip-path-3);}"
                }}
              />
              <clipPath id="clip-path">
                <path
                  className="cls-1b"
                  d="M-1009.6-2183.7a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.1,16.1,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16V-2180a12.5,12.5,0,0,1,10.6,12.3v29h3.6v-29A16.2,16.2,0,0,0-1009.6-2183.7Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  className="cls-1b"
                  d="M-1027.6-3308.7a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.1,16.1,0,0,0-16.2,16v29h3.6v-29a12.6,12.6,0,0,1,10.7-12.3v25.3a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16V-3305a12.5,12.5,0,0,1,10.6,12.3v29h3.6v-29A16.2,16.2,0,0,0-1027.6-3308.7Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  className="cls-1b"
                  d="M-1021.6-1061.6a16.2,16.2,0,0,0-14.3,8.6,16.2,16.2,0,0,0-14.3-8.6,16.1,16.1,0,0,0-16.2,16v29h3.6v-29a12.4,12.4,0,0,1,10.7-12.2v25.2a16.2,16.2,0,0,0,16.2,16,16.2,16.2,0,0,0,16.2-16v-25.2a12.3,12.3,0,0,1,10.6,12.2v27.2c0,.1,0,.1.1.2v1.6h3.6v-29A16.2,16.2,0,0,0-1021.6-1061.6Zm-15.8,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
            </defs>
            <title>x</title>
            <polyline
              vectorEffect="non-scaling-stroke"
              className="cls-4b"
              points="19.3 1 10.2 10.7 19.3 20.4"
            />
            <polyline
              vectorEffect="non-scaling-stroke"
              className="cls-4b"
              points="1.1 1 10.2 10.7 1.1 20.4"
            />
          </svg>
        </div>
        {/* Carousel */}
        <div className="carousel hide-mobile">
          <svg
            id="carousel"
            data-name="carousel"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 208 28.5"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1c{fill:none;}.cls-2c{clip-path:url(#clip-path);}.cls-3c{clip-path:url(#clip-path-2);}.cls-4c{clip-path:url(#clip-path-3);}.cls-5c{clip-path:url(#clip-path-4);}.cls-6c{clip-path:url(#clip-path-5);}.cls-7c{clip-path:url(#clip-path-6);}.cls-8c{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}"
                }}
              />
              <clipPath id="clip-path">
                <path
                  className="cls-1c"
                  d="M-1079.2-2176.9a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16.1,16.1,0,0,0,16.1,16,16.2,16.2,0,0,0,16.2-16v-25.2a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0-1079.2-2176.9Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  className="cls-1c"
                  d="M261.8-2155.9a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16.1,16.1,0,0,0,16.1,16,16.2,16.2,0,0,0,16.2-16v-25.2a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0,261.8-2155.9Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  className="cls-1c"
                  d="M-1097.2-3301.9a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16.1,16.1,0,0,0,16.1,16,16.2,16.2,0,0,0,16.2-16v-25.2a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0-1097.2-3301.9Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-4">
                <path
                  vectorEffect="non-scaling-stroke"
                  className="cls-1c"
                  d="M243.8-3301.9a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16.1,16.1,0,0,0,16.1,16,16.2,16.2,0,0,0,16.2-16v-25.2a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0,243.8-3301.9Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-5">
                <path
                  vectorEffect="non-scaling-stroke"
                  className="cls-1c"
                  d="M249.8-1063.8a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16,16,0,0,0,16.1,16,16.1,16.1,0,0,0,16.2-16V-1060a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0,249.8-1063.8Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
              <clipPath id="clip-path-6">
                <path
                  vectorEffect="non-scaling-stroke"
                  className="cls-1"
                  d="M-1091.2-1054.8a16.2,16.2,0,0,0-14.4,8.6,16.2,16.2,0,0,0-14.3-8.6,16.2,16.2,0,0,0-16.2,16v29h3.7v-29a12.3,12.3,0,0,1,10.7-12.2v25.2a16,16,0,0,0,16.1,16,16.1,16.1,0,0,0,16.2-16V-1051a12.4,12.4,0,0,1,10.7,12.2v29h3.6v-29A16.1,16.1,0,0,0-1091.2-1054.8Zm-15.9,42a12.7,12.7,0,0,1-11-12.4v-25.6a12.7,12.7,0,0,1,11,12.4Zm14-12.4a12.7,12.7,0,0,1-11,12.4v-25.6a12.7,12.7,0,0,1,11-12.4Z"
                />
              </clipPath>
            </defs>
            <title>carousel</title>
            <polygon
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              points="205 13.9 185.6 2.7 185.6 25.1 205 13.9"
            />
            <polygon
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              points="3 14.5 22.4 25.7 22.4 3.3 3 14.5"
            />
            <rect
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              x="145.1"
              y="1.5"
              width={23}
              height="25.45"
            />
            <rect
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              x={110}
              y="1.5"
              width={23}
              height="25.45"
            />
            <rect
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              x="39.9"
              y="1.5"
              width={23}
              height="25.45"
            />
            <rect
              vectorEffect="non-scaling-stroke"
              className="cls-8c"
              x={75}
              y="1.5"
              width={23}
              height="25.45"
            />
          </svg>
        </div>
        {/* Card Component */}
        <div className="rect rect-cardcomp rand-border-radius hide-mobile">
          <div className="circle round-makeui" />
          <div className="hr-group">
            <hr align="center" />
            <hr align="center" />
            <hr align="center" />
          </div>
        </div>
        {/* Form */}
        <div className="form hide-mobile">
          <div className="el-1">
            <div className="circle round-makeui" />
          </div>
          <div className="el-2">
            <hr width="30%" align="left" />
            <div className="rect rand-border-radius-2" />
          </div>
          <div className="el-3">
            <hr width="50%" align="left" />
            <div className="rect rand-border-radius-2">
              <img src="images/chevron-down.svg" />
            </div>
          </div>
          <br />
          <br />
          <div className="el-4">
            <hr width="30%" align="left" />
            <div className="rect rand-border-radius-2" />
          </div>
          <br />
          <br />
          <br />
          <div className="el-5" />
        </div>
        <div className="hide-mobile wave">
          <img
            src="images/wave.svg"
            width={1216}
            style={{ float: "right" }}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  background: state.background
});

const mapDispatchToProps = (dispatch) => ({
  setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
  setColor: (index, color) => dispatch(setColor(index, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
