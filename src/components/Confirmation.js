import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shippingMethodText from '../utils/shippingMethodText';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1, 4, 2),
    marginTop: theme.spacing(1.5),
  },
  title: {
    margin: theme.spacing(1, 0, 1.5),
  },
  subTitle: {
    margin: theme.spacing(1.25, 0),
  },
  productItem: {
    padding: theme.spacing(0.2, 1),
    flexWrap: 'wrap',
    border: '1px solid #e6e6e6',
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(0, 0, 0,0.04)',
    },
    '&:not(:last-of-type)': {
      borderBottomWidth: 0,
    },
  },
}));

const Confirmation = ({ userBilling }) => {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    email,
    address,
    city,
    country,
    shippingOption,
  } = userBilling;

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
      value: `${address}, ${city} ${country}`,
    },
    {
      id: 3,
      label: 'Shipping method:',
      value: `${shippingMethodText(shippingOption)} ${shippingOption} €`,
    },
  ];

  return (
    <>
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
      <Review shippingOption={shippingOption} />
    </>
  );
};

export default Confirmation;
