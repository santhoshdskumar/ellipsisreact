import IconDashboard from '@material-ui/icons/Dashboard';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
const MenuData = [
  {
    name: 'All Tools',
    exact: true,
    to: '/',
    icon: <IconDashboard />,
  },
  {
    name: 'Dashboard',
    exact: true,
    to: `/Dashboard`,
    icon: <IconDashboard />,
  },
  {
    name: 'Digital Ads',
    to: `/Digital`,
    icon: <EmailIcon />,
    submenuClass: 'subActive',
    subMenus: [
      { name: 'Google Ads', to: '/Digital' },
      { name: 'Facebook Ads', to: '/Digital' },
      { name: 'Linkedin Text Ads', to: '/Digital' },
      { name: 'Link Descriptions', to: '/Digital' },
      { name: 'A/B Testing', to: '/Digital' },
      {
        name: 'Mobile App Notifications',
        to: '/digitalads/mobileappnotifications',
      },
    ],
  },
  {
    name: 'Email Toolkit',
    exact: true,
    to: `/Emailtoolkit`,
    icon: <EmailIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Emailtoolkit' },
      { name: 'New Lead Engagement', to: '/Emailtoolkit' },
      { name: 'Free user engagement', to: '/Emailtoolkit' },
      { name: 'Schedule Product Demo', to: '/Emailtoolkit' },
      { name: 'Hail Mary Passs', to: '/Emailtoolkit' },
    ],
  },
  {
    name: 'Linkedin Toolkit',
    exact: true,
    to: `/Linkedintoolkit`,
    icon: <LinkedInIcon />,
    submenuClass: 'subActive',
    subMenus: [
      { name: 'Sales EMails', to: '/Linkedintoolkit' },
      { name: 'New Lead Engagement', to: '/Linkedintoolkit' },
      { name: 'Free user engagement', to: '/Linkedintoolkit' },
      { name: 'Schedule Product Demo', to: '/Linkedintoolkit' },
      { name: 'Hail Mary Passs', to: '/Linkedintoolkit' },
    ],
  },
  {
    name: 'Website Toolkit',
    exact: true,
    to: `/Websitetoolkit`,
    icon: <WebIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Websitetoolkit' },
      { name: 'New Lead Engagement', to: '/Websitetoolkit' },
      { name: 'Free user engagement', to: '/Websitetoolkit' },
      { name: 'Schedule Product Demo', to: '/Websitetoolkit' },
      { name: 'Hail Mary Passs', to: '/Websitetoolkit' },
    ],
  },
  {
    name: 'Article Toolkit',
    exact: true,
    to: `/Articletoolkit`,
    icon: <AssignmentIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Websitetoolkit' },
      { name: 'New Lead Engagement', to: '/Websitetoolkit' },
      { name: 'Free user engagement', to: '/Websitetoolkit' },
      { name: 'Schedule Product Demo', to: '/Websitetoolkit' },
      { name: 'Hail Mary Passs', to: '/Websitetoolkit' },
    ],
  },
  {
    name: 'Event Toolkit',
    exact: true,
    to: `/Eventtoolkit`,
    icon: <CreateIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Eventtoolkit' },
      { name: 'New Lead Engagement', to: '/Eventtoolkit' },
      { name: 'Free user engagement', to: '/Eventtoolkit' },
      { name: 'Schedule Product Demo', to: '/Eventtoolkit' },
      { name: 'Hail Mary Passs', to: '/Eventtoolkit' },
    ],
  },
  {
    name: 'Writing Toolkit',
    exact: true,
    to: `/Writingtoolkit`,
    icon: <CreateIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Writingtoolkit' },
      { name: 'New Lead Engagement', to: '/Writingtoolkit' },
      { name: 'Free user engagement', to: '/Writingtoolkit' },
      { name: 'Schedule Product Demo', to: '/Writingtoolkit' },
      { name: 'Hail Mary Passs', to: '/Writingtoolkit' },
    ],
  },
];

export default MenuData;
