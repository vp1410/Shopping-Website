import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe =  price * 100;
    const publishableKey = 'pk_test_51GxI4HAeEYNXrdzjYdWYgLIe2pFuW9dNpeLXrLmkmiSrvun8xrwFOBrwYmFfjiJUjY3A5Dam3YCVF99JWXlXYOZy00WFV1tSD8';
    const  onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Vivek Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;


