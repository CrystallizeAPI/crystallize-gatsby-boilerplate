import { persistCrystallizeOrder } from 'utils/crystallize-order-handler';
import { orderQueryNormalizer } from 'utils/order-normalizer';
import { emailOrderConfirmation } from 'utils/emails';


// TODO: Remove body parsing once zeit has updated error handling
// @RemoveWhenZeitErrorHandledComplete
const bodyParser = request => {
  return new Promise(resolve => {
    let data = '';
    request.on('data', chunk => {
      data += chunk;
    });
    request.on('end', () => {
      try {
        const body = JSON.parse(data);
        resolve(body);
      } catch (error) {
        resolve({});
      }
    });
  });
};

export default async (req, res) => {
  // TODO: Handle understanding the payment method by some body fields e.g. stripe has customer_id
  let [paymentMethod] = req.query.path;
  let response;

  const data = await bodyParser(req);

  try {
    const { paymentIntentId } = data;

    // @extraStripe


    if (!paymentMethod) {
      return res.status(200).send({
        success: true,
        message: 'No payment method seems to be selected'
      });
    }

    const mutationBody = await orderQueryNormalizer(data, paymentMethod, {
     

      paymentIntentId,
     

      vippsOrderId: req.query.path[req.query.path.length - 1]
    });

    response = await persistCrystallizeOrder(
      mutationBody,
      paymentMethod === 'vipps' ? true : false
    );


    await emailOrderConfirmation(
      paymentMethod !== 'vipps'
        ? response.data.orders.create.id
        : response.data.order.update.id
    );
  } catch (error) {
    return res.status(503).send({
      success: false,
      error: error.stack
    });
  }
  return res.status(200).send({
    success: true,
    ...response
  });
};

// @RemoveWhenZeitErrorHandledComplete
export const config = {
  api: {
    bodyParser: false
  }
};
