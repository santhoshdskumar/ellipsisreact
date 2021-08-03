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
    to: `#`,
    icon: <EmailIcon />,
    submenuClass: 'subActive',
    subMenus: [
      { name: 'Google Ads', to: '/google-adsense' },
      { name: 'Facebook Ads', to: '/facebookads' },
      { name: 'Linkedin Text Ads', to: '/linkedinads' },
      { name: 'Link Descriptions', to: '/meta_tags' },
      { name: 'A/B Testing', to: '/ad_copies' },
      {
        name: 'Mobile App Notifications',
        to: '/mobile_notification',
      },
    ],
  },
  {
    name: 'Email Toolkit',
    exact: true,
    to: `#`,
    icon: <EmailIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/sales_emails' },
      { name: 'New Lead Engagement', to: '/new_lead_engagement' },
      { name: 'Free user engagement', to: '/free_user_engagement' },
      { name: 'Post Purchase Engagement ', to: '/post_purchase_engagement' },
      { name: 'Schedule Product Demo', to: '/schedule_product_demo' },
      { name: 'Hail Mary Passs', to: '/hail_mary_mail' },
    ],
  },
  {
    name: 'Linkedin Toolkit',
    exact: true,
    to: `#`,
    icon: <LinkedInIcon />,
    submenuClass: 'subActive',
    subMenus: [
      { name: 'Ad Link Description', to: '/linkedinlinkdesc' },
      { name: 'Carousel Ads', to: '/carousel_ads' },
      { name: 'Dynamic Ads', to: '/dynamic_ads' },
      { name: 'Conversational Pitches', to: '/sponsored_msg' },
      { name: 'Sales InMails', to: '/sponsoredmail' },
      { name: 'Cold Calling Investors', to: '/coldcalling' },
      { name: 'Cold Calling Recruiters', to: '/coldcalling_rec' },
    ],
  },
  {
    name: 'Website Toolkit',
    exact: true,
    to: `#`,
    icon: <WebIcon />,
    subMenus: [
      { name: 'Sales EMails', to: '/Websitetoolkit' },
      { name: 'New Lead Engagement', to: '/Websitetoolkit' },
      { name: 'Free user engagement', to: '/Websitetoolkit' },
      { name: 'Schedule Product Demo', to: '/Websitetoolkit' },
      { name: 'Sales InMails', to: '/Websitetoolkit' },
      { name: 'Free user engagement', to: '/Websitetoolkit' },
      { name: 'Schedule Product Demo', to: '/Websitetoolkit' },
      { name: 'Sales InMails', to: '/Websitetoolkit' },
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
