import React from 'react';

const CompleteModal = (props) => {

  const message = {
    once: "Start prototyping your app by opening your custom UI kit in Sketch!",
    unlimited: "Start prototyping your app by opening your custom UI kit in Sketch! Should you want to download again, just enter your email in the customize section and we will send you an email with the download link"
  };
  return (
    <div className="checkout">
      <div>
        <h1 className="modal-title--complete">Thank you for your purchase!</h1>
      </div>
      <div>
        <p style={{ textAlign: 'left', marginBottom: '25px' }}>{message[props.message]}</p>
      </div>
      <div>
        <p style={{ textAlign: 'left' }}>Share MakeUI with your peers</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="social-icon--small"><img src="/images/Twitter.svg" /></div>
          <div className="social-icon--small"><img src="/images/Facebook.svg" /></div>
        </div>
      </div>
    </div>
  );
};

export default CompleteModal;