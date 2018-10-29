import React from 'react';
import CheckoutForm from './CheckoutForm';
import Modal from 'react-modal';
import { Elements, StripeProvider } from 'react-stripe-elements';

const CheckoutFormModal = (props) => {
  return (
    <Modal
      isOpen={props.charging}
      contentLabel="payment"
      ariaHideApp={false}
      onRequestClose={props.handleModalClose}
      closeTimeoutMS={200}
      className="modal"
    >
      <StripeProvider apiKey="pk_test_hnMkmoqkvZxUjOrnEkPIVd80">
        <div className="example">
          <h1 className="modal-title">Make UI Kit</h1>
          <Elements>
            <CheckoutForm onModalFormSubmit={(token) => props.onModalFormSubmit(token)} />
          </Elements>
        </div>
      </StripeProvider>
    </Modal>

  );
};

export default CheckoutFormModal;