import React from 'react';

const UpcomingFeatures = () => (
  <div className="upcomming">
    <div className="content-container flex-column">
      <div className="center-h">
        <h1 className="section-heading--margin-small center-text black">Upcoming Features</h1>
      </div>
      <div className="flex-row">
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Fonts.svg" />
          </div>
          <h2 className="sub-heading black">FONTS</h2>
        </div>
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Logo_Upload.svg" />
          </div>
          <h2 className="sub-heading black">LOGO UPLOAD</h2>
        </div>
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Preview.svg" />
          </div>
          <h2 className="sub-heading black">COMPONENT PREVIEW</h2>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Layouts.svg" />
          </div>
          <h2 className="sub-heading black">LAYOUTS</h2>
        </div>
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Themes.svg" />
          </div>
          <h2 className="sub-heading black">THEMES</h2>
        </div>
        <div className="flex-third">
          <div className="img-box">
            <img src="images/MakeUI_Icons-Code.svg" />
          </div>
          <h2 className="sub-heading black">CODE</h2>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingFeatures;