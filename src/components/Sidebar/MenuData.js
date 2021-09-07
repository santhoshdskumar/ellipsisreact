import IconDashboard from '@material-ui/icons/Dashboard';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
const MenuData = [
  {
    name: 'Dashboard',
    exact: true,
    to: `/Dashboard`,
    icon: <IconDashboard />,
  },
  {
    name: 'All Tools',
    exact: true,
    to: '/Alltools',
    icon: <i class="fas fa-border-all"></i>,
  },
  {
    name: 'Digital Ads',
    to: 'javascript:void(0)',
    exact: true,
    icon: <i class="nav-icon fas fa-ad"></i>,
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
    name: 'Articles',
    exact: true,
    to: 'javascript:void(0)',
    icon: <i class="nav-icon fas fa-newspaper"></i>,
    subMenus: [
      { name: 'Article Ideas', to: '/article_ideas' },
      { name: 'Article Title', to: '/article_title' },
      { name: 'Article Outlines', to: '/article_outlines' },
      { name: 'Article Intro', to: '/article_intro' },
    ],
  },
  {
    name: 'Emails',
    exact: true,
    to: 'javascript:void(0)',
    icon: <i class="nav-icon fas fa-envelope"></i>,
    subMenus: [
      { name: 'Sales Emails', to: '/sales_emails' },
      { name: 'New Lead Engagement', to: '/new_lead_engagement' },
      { name: 'Free User Engagement', to: '/free_user_engagement' },
      { name: 'Post Purchase Engagement ', to: '/post_purchase_engagement' },
      { name: 'Schedule Product Demo', to: '/schedule_product_demo' },
      { name: 'Activate Dormant Users', to: '/activate_dormant_users' },
    ],
  },
  {
    name: 'LinkedIn',
    exact: true,
    to: 'javascript:void(0)',
    icon: <i class="nav-icon fab fa-linkedin-in"></i>,
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
    name: 'Website',
    exact: true,
    to: 'javascript:void(0)',
    icon: <i class="nav-icon fas fa-globe"></i>,
    subMenus: [
      { name: 'Hero Text', to: '/hero_text' },
      { name: 'Product Reviews', to: '/productreview' },
      { name: 'Problem-Solution', to: '/problemsoln' },
      { name: 'Website Description', to: '/web_desc' },
      { name: 'Feature-Benefits', to: '/feature_benefit' },
    ],
  },

  {
    name: 'Event Promotions',
    exact: true,
    to: '#javascript:void(0)',
    icon: <i class="nav-icon fa fa-calendar"></i>,
    subMenus: [
      { name: 'Event Promo Emails', to: '/event_promo_mail' },
      { name: 'Webinar Promo Emails', to: '/webinar_promo_mail' },
      { name: 'Event Follow-up Emails', to: '/event_followup_mail' },
      { name: 'Event Digital Ads', to: '/event_digitalads' },
    ],
  },
  // {
  //   name: 'Writing',
  //   exact: true,
  //   to: '#javascript:void(0)',
  //   icon: <i class="nav-icon fas fa-newspaper"></i>,
  //   subMenus: [{ name: 'Writings', to: '/write_like_me' }],
  // },
];

export default MenuData;
