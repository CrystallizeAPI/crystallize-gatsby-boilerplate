const orderDataDenormalizer = (paymentMethod, orderData) => {
  switch (paymentMethod) {
    case "vipps":
      break
    default:
      break
  }
  return orderData
}

module.exports = { orderDataDenormalizer }
