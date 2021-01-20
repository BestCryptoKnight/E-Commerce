import { Typography } from '@material-ui/core';
import Review from './Review';

const Confirmation = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom align="center">
        Step 2: Review and confirmation
      </Typography>
      <Review />
    </>
  );
};

export default Confirmation;
