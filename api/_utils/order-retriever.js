const { fetchCrystallizeOrder } = require("./crystallize-order-handler")
// eslint-disable-next-line consistent-return
async function orderRetriever(
  paymentMethod,
  isCrystallizeRequest,
  { orderId }
) {
  try {
    switch (paymentMethod) {
      default:
        if (isCrystallizeRequest) return fetchCrystallizeOrder(orderId)

        throw new Error(
          `Please provide a Payment Method(${paymentMethod}) or make this a Crystallize request by using isCrystallizeRequest(${isCrystallizeRequest})`
        )
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = { orderRetriever }
