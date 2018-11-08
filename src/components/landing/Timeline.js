import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="content-container flex-column">
        <div className="center-h">
          <h1 className="section-heading--margin-small white">Timeline</h1>
        </div>
        <div className="flex-row align-center timeline-margin">
          <div className="center-h flex-column">
            <h2 className="sub-heading white no-margin center-text">CURRENTLY SUPPORTS</h2>
            <p style={margin} className="white center-text">Sketch</p>
          </div>
          <div className="hr-container"><hr align="center" /></div>
          <div className="center-h flex-column">
            <h2 className="sub-heading white no-margin center-text">END OF 2018 REALEASE</h2>
            <div className="flex-row-nobreak">
              <p style={margin} className="white center-text">Figma</p>
              <p style={margin} className="white center-text">React</p>
              <p style={margin} className="white center-text">Framer</p>
            </div>
          </div>
          <div className="hr-container"><hr align="center" /></div>
          <div className="center-h flex-column">
            <h2 className="sub-heading white no-margin center-text">SPRING 2019</h2>
            <p style={margin} className="white center-text">Shopify</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const margin = {
  marginTop: '30px',
  fontSize: '18px',
}


export default Timeline;