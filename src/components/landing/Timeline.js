import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline" style={{ overflow: 'hidden' }}>
      <div className="center-h">
        <h1 style={{ marginTop: '40px' }} className="section-heading--margin-small white"></h1>
      </div>
      <div className="content-container flex-column scroll">
        <div className="timeline-contents align-center timeline-margin scroll">
          <div className="center-h flex-column timeline-peice">
            <h2 className="sub-heading white no-margin center-text">CURRENTLY SUPPORTS</h2>
            <p style={margin} className="white center-text">Sketch</p>
          </div>
          <div className="hr-container"><hr align="center" /></div>
          <div className="center-h flex-column timeline-peice">
            <h2 className="sub-heading white no-margin center-text">SPRING 2019 RELEASES</h2>
            <div className="flex-row-nobreak">
              <p style={margin} className="white center-text">Figma</p>
              <p style={margin} className="white center-text">React</p>
              <p style={margin} className="white center-text">Framer</p>
            </div>
          </div>
          <div className="hr-container"><hr align="center" /></div>
          <div className="center-h flex-column timeline-peice">
            <h2 className="sub-heading white no-margin center-text">SUMMER 2019</h2>
            <div className="flex-row-nobreak">
              <p style={margin} className="white center-text">Shopify</p>
              <p style={margin} className="white center-text">WebFlow</p>
              <p style={margin} className="white center-text">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const margin = {
  marginTop: '30px',
  fontSize: '18px',
  marginLeft: '10px',
}


export default Timeline;