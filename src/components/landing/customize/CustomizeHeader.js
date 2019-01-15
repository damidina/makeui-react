import React from 'react';
import MediaQuery from 'react-responsive';

const CustomizeHeader = () => (
  <div>
    <div className="content-container flex-column" style={{ padding: '32px' }}>
      <div className="center-h">
        <h1 className="section-heading--margin-small black center-text">Make Your UI Kit</h1>
      </div>
      <div className="center-h">
        <MediaQuery maxWidth={460}>
          {(match) => {
            if (match) {
              return <h1 style={{ fontSize: '20px', fontWeight: 300, lineHeight: '30px' }} className="center-text black">
                       Customize your UI kit by selecting a theme, your brand colours and corner radius.
                     </h1>
            } else {
              return <h1 className="heading-light center-text black">
                       Customize your UI kit by selecting a theme, your brand colours and corner radius.
                     </h1>
            }
          }
          }
        </MediaQuery>
      </div>
    </div>
  </div>
);

export default CustomizeHeader;
