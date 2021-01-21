const shippingMethodText = (value) => {
  switch (value) {
    case 5:
      return 'Standard';
    case 10:
      return 'Express';
    default:
      return 'Standard';
  }
};

export default shippingMethodText;
