/* eslint-disable no-underscore-dangle */
const config = require('../../.env');
const vippsApiCall = require('./_utils/.vipps-utils');
const normallizer = require('./normalizer/vipps');
const {
  persistCrystallizeOrder
} = require('./_utils/_crystallize-order-handler');

const { VIPPS_MERCHANT_SERIAL, NGROK_URL } = config;

const orderToVippsCart = lineItems => {
  let totalCartAmount = 0;

  const cartItems = lineItems.map(item => {
    totalCartAmount += item.product_tax_amount;

    return item;
  });

  return {
    cart: cartItems,
    totalCartAmount: totalCartAmount
  };
};

const orderToVippsBody = (
  orderDetails,
  lineItems,
  personalDetails,
  crystallizeOrderId
) => {
  const { totalCartAmount } = orderToVippsCart(lineItems);

  return {
    merchantInfo: {
      merchantSerialNumber: VIPPS_MERCHANT_SERIAL,
      callbackPrefix: `${NGROK_URL}/.netlify/lamda/order-persistence/vipps`,
      //   shippingDetailsPrefix: NGROK_URL,
      consentRemovalPrefix: NGROK_URL,
      paymentType: 'eComm Express Payment',
      fallBack: NGROK_URL,
      isApp: false
    },
    customerInfo: {
      mobileNumber: personalDetails.phone
    },
    transaction: {
      orderId: crystallizeOrderId,
      amount: totalCartAmount,
      transactionText: 'Ørn Forlag bok transaksjon',
      staticShippingDetails: [
        {
          isDefault: 'Y',
          priority: 0,
          shippingCost: 0,
          shippingMethod: 'Posten-servicepakke',
          shippingMethodId: 'free'
        }
      ]
    }
  };
};

export default async (req, res) => {
  try {
    const { personalDetails, lineItems, currency } = req.body;
    const { metadata } = req.body;
    const mutationBody = normallizer(
      {},
      { lineItems, currency, personalDetails }
    );

    const { data } = await persistCrystallizeOrder(mutationBody);

     await vippsApiCall({
         method: 'POST',
         uri: '/ecomm/v2/payments',
         body: orderToVippsBody(req.body, lineItems)
       });
    console.log(data.orders.create.id);
    return res.send({
      body: orderToVippsBody(
        req.body,
        lineItems,
        personalDetails,
        data.orders.create.id
      )
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error.stack
    });
  }
};
