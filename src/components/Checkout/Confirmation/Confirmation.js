import BillingReview from './BillingReview/BillingReview';
import OrderReview from './OrderReview/OrderReview';

const Confirmation = ({ userBilling }) => (
  <>
    <BillingReview {...userBilling} />
    <OrderReview {...userBilling} />
  </>
);

export default Confirmation;
