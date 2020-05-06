const {

    vippsNormalizer
  } = require('./normalizers/vipps');
  
  const orderQueryNormalizer = async (
    orderData,
    paymentMethod,
    {vippsOrderId }
  ) => {
    switch (paymentMethod) {
      
      case 'vipps':
        return vippsNormalizer({ vippsOrderId }, orderData);
      default:
        break;
    }
    return true;
  };
  
  module.exports = {
    orderQueryNormalizer,
  };
  