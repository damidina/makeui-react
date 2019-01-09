import React from 'react';
import MediaQuery from 'react-responsive';

const CustomizeHeader = () => (
  <div>
    <div className="content-container flex-column" style={{ padding: '32px' }}>
      <div className="center-h">
        <h1 className="section-heading--margin-small black center-text">Make Your Application UI Kit</h1>
      </div>
      <div className="center-h">
        <MediaQuery maxWidth={460}>
          {(match) => {
            if (match) {
              return <h1 style={{ fontSize: '20px', fontWeight: 300, lineHeight: '30px' }} className="center-text black">Customize your UI Kit by selecting your brand colours and corner radius.</h1>
            } else {
              return <h1 className="heading-light center-text black">Customize your UI Kit by selecting your brand colours and corner radius.</h1>
            }
          }
          }
        </MediaQuery>
      </div>
      <div className="center-h">
        <MediaQuery minWidth={460}>
          <p className="paragraph-bold">Wanna see what you are getting? <span className="underline"><a>See an example here</a></span></p>
        </MediaQuery>
      </div>
    </div>
  </div>
);

export default CustomizeHeader;