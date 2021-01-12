import { useState } from 'react';

const Checkout = () => {
  const [isFinished, setIsFinished] = useState(false);

  const timeout = setTimeout(() => {
    setIsFinished(false);
  }, 2000);

  return <h4>Tere</h4>;
};

export default Checkout;
