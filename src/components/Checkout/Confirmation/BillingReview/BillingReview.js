import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import shippingMethodText from '../../../../utils/shippingMethodText';
import useStyles from './styles';

const BillingReview = ({
  firstName,
  lastName,
  email,
  address,
  city,
  country,
  shippingOption,
}) => {
  const classes = useStyles();

  const billingListItems = [
    {
      id: 0,
      label: 'Full name:',
      value: `${firstName} ${lastName}`,
    },
    {
      id: 1,
      label: 'Email:',
      value: email,
    },
    {
      id: 2,
      label: 'Address:',
      value: `${address}, ${city}, ${country}`,
    },
    {
      id: 3,
      label: 'Shipping method:',
      value: `${shippingMethodText(shippingOption)} ${shippingOption} €`,
    },
  ];

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography
        variant="h6"
        // gutterBottom
        align="center"
        className={classes.title}
      >
        Step 2: Review and confirmation
      </Typography>
      <Divider />
      <Typography variant="h6" align="center" className={classes.subTitle}>
        Billing summary
      </Typography>
      <List disablePadding>
        {billingListItems.map(({ id, label, value }) => (
          <ListItem className={classes.productItem} key={id}>
            <ListItemText primary={label} />
            <Typography variant="body1">{value}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default BillingReview;
