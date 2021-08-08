import DataUsageIcon from '@material-ui/icons/DataUsage';
import ReceiptIcon from '@material-ui/icons/Receipt';

export const Billing = [
  {
    icon:<ReceiptIcon />,
    title: 'Manage Billing',
    text: 'Expiring products, billing dates and recurring events',
    className: 'billing',
  },
];

export const Order = [
  {
    icon:<DataUsageIcon />,
    title: 'Usage',
    text: 'Past and pending orders, reciepts and refunds',
    className: 'order',
  },
];
