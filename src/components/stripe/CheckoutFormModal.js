import React from 'react';
import CheckoutForm from './CheckoutForm';
import Modal from 'react-modal';
import CompleteModal from './CompleteModal';
import { Elements, StripeProvider } from 'react-stripe-elements';

class CheckoutFormModal extends React.Component {

  state = {
    loading: this.props.justLoading ? true : false,
  }

  render() {

    Modal.defaultStyles.overlay.backgroundColor = this.props.currentColor;

    return (
      <Modal
        isOpen={this.props.charging}
        contentLabel="payment"
        ariaHideApp={false}
        onRequestClose={this.props.handleModalClose}
        closeTimeoutMS={0}
        className="modal"
      >

        {
          this.props.purchaseComplete
            ? <CompleteModal message={this.props.whichOption} />
            : (
              this.props.justLoading
                ? <div className="makeui-loading"><div></div><div></div><div></div></div>
                : (
                  <StripeProvider apiKey="pk_test_hnMkmoqkvZxUjOrnEkPIVd80">
                    <div className="example">
                      <Elements>
                        <CheckoutForm
                          onRequestClose={this.props.handleModalClose}
                          onModalFormSubmit={(token) => this.props.onModalFormSubmit(token)}
                          whichOption={this.props.whichOption}
                          activateLoading={this.props.activateLoading}
                        />
                      </Elements>
                    </div>
                  </StripeProvider>
                ))
        }
      </Modal>
    );
  }
};

export default CheckoutFormModal;