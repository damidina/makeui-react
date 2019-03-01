import React from 'react';
import { connect } from 'react-redux';

const UpcomingFeatures = (props) => {
  return (
    <div className="upcomming" style={{ background: props.background, display: 'flex', justifyContent: 'center' }}>
      <div className="grid-container" style={{ width: '100%' }}>
        <div className="center-h full-width">
          <h1 className="section-heading--margin-small center-text black custom-width-uf" style={{ marginBottom: '4rem', marginTop: '4rem' }}>Upcoming Features</h1>
        </div>

        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/MakeUI_Icons-Fonts.svg" />
          </div>
          <h2 className="sub-heading black center-text" style={{ marginTop: '20px' }}>FONTS</h2>
        </div>
        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/MakeUI_Icons-Logo_Upload.svg" />
          </div>
          <h2 className="sub-heading black center-text" style={{ marginTop: '20px' }}>LOGO UPLOAD</h2>
        </div>
        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/MakeUI_Icons-Preview.svg" />
          </div>
          <h2 className="sub-heading black center-text" style={{ width: '150px', marginTop: '20px' }}>COMPONENT PREVIEW</h2>
        </div>

        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/MakeUI_Icons-Layouts.svg" />
          </div>
          <h2 className="sub-heading black center-text" style={{ marginTop: '20px' }}>LAYOUTS PREVIEW</h2>
        </div>
        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/marketplaceicon.png" className="theme-marketplace-icon"/>
          </div>
          <h2 className="sub-heading black center-text" style={{ marginTop: '20px', padding: '0 16px' }}>THEME MARKETPLACE</h2>
        </div>
        <div className="grid-3-xs flex-column align-center">
          <div className="img-box-resp">
            <img src="images/MakeUI_Icons-Code.svg" />
          </div>
          <h2 className="sub-heading black center-text" style={{ marginTop: '20px' }}>CODE</h2>
        </div>
        <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="center-h full-width">
          <p style={{ marginBottom: '0px' }} className="description">Have a feature suggestion?</p>
          <p style={{ fontWeight: 'bold', marginTop: '8px', marginBottom: '60px' }} className="underline bold description"><a style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} className="underline" href="mailto:contact@makeui.design">Drop us a line.</a></p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  background: state.background
});

export default connect(mapStateToProps)(UpcomingFeatures);
