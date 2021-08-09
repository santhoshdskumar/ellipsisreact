import MobileAppNotifications from '../assets/images/icons/mobileappnotifications.svg';
import facebook from '../assets/images/icons/facebook.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import SalesEmail from '../assets/images/icons/salesemail.svg';
import CarouselAds from '../assets/images/icons/carouselads.svg';
import ArticleIdeas from '../assets/images/icons/articleideas.svg';
import GoogleAds from '../assets/images/icons/googleads.svg';
import AdLinkDescriptions from '../assets/images/icons/adlinkdescription.svg';
import LinkedinTextAds from '../assets/images/icons/linkedIntextads.svg';
import Descriptions from '../assets/images/icons/Descriptions.svg';
import Testing from '../assets/images/icons/Testing.svg';
import Lead from '../assets/images/icons/Lead.svg';
import User from '../assets/images/icons/user.svg';
import Post from '../assets/images/icons/post.svg';
import Schedule from '../assets/images/icons/Schedule.svg';
import Dormant from '../assets/images/icons/Dormant.svg';
import Conversional from '../assets/images/icons/Conversional.svg';
import Recruiters from '../assets/images/icons/Recruiters.svg';
import Investors from '../assets/images/icons/Investors.svg';
import Dynamic from '../assets/images/icons/Dynamic.svg';
import HeroText from '../assets/images/icons/HeroText.svg'
import ProductReviews from '../assets/images/icons/ProductReviews.svg'
import ProductSolution from '../assets/images/icons/Product-Solution.svg'
import WebsiteDescription from '../assets/images/icons/WebsiteDescription.svg'
import  FeatureBenefits from '../assets/images/icons/FeatureBenefits.svg';
import articletitle from '../assets/images/icons/articletitle.svg';
import Outlines from '../assets/images/icons/Outlines.svg';
import Intro from '../assets/images/icons/Intro.svg';
import EventDigitalAds from '../assets/images/icons/EventDigitalAds.svg';
import EventFollowupEmailsupEmailsro from '../assets/images/icons/EventFollow-upEmails.svg';
import EventPromoEmails from '../assets/images/icons/EventPromoEmails.svg';
import WebinarPromoEmails from '../assets/images/icons/WebinarPromoEmails.svg';
import Write from '../assets/images/icons/Write.svg';


export const Digital = [
  {
    socialtype:GoogleAds,
    title: 'Google Ads',
    popular:'Popular',
    text: 'High converting ads for Google Search',
    link:'/google-adsense'
  },
  {
    socialtype:facebook,
    title: 'Facebook Ads',
    text: 'Manage content for multiple audiences on Facebook ',
    link:'/facebookads'
  },
  {
    socialtype: linkedin,
    title: 'LinkedIn Text Ads',
    text: 'Drive thought leadership with LinkedIn Text ads',
    link:'/linkedinads'
  },
  {
    socialtype: MobileAppNotifications,
    title: 'Mobile App Notification',
    text: 'Engaging mobile app notification alerts',
    link:'/mobile_notification'
    
  },
  {
    socialtype: Testing,
    title: 'Ad Copies For A/B Testing',
    text: 'Generate multiple variations for AB testing',
    link:'/ad_copies'

  },
  {
    socialtype: Descriptions,
    title: 'Link Descriptions',
    text: 'Metadata for all your landing pages',
    link:'/meta_tags'
  },
];

export const Email = [
  {
    socialtype: SalesEmail,
    title: 'Sales Emails',
    text: 'Framework for writing thoughtful emails',
    link:'/sales_emails'
  },
  {
    socialtype: Lead,
    title: 'New Lead Engagement',
    text: 'Make a good first impression with new users',
    link:'/new_lead_engagement'
  },
  {
    socialtype: User,
    title: 'Free User Engagement',
    text: 'Convert free users into paid users',
    link:'/free_user_engagement'
  },
  {
    socialtype: Post,
    title: 'Post Purchase Engagement',
    text: 'Engage with existing users to reduce churn',
    link:'/post_purchase_engagement'
  },
  {
    socialtype: Schedule,
    popular:'Popular',
    title: 'Schedule Product Demo',
    text: 'Get that time time commitment from users for demo',
    link:'schedule_product_demo'
  },
  {
    socialtype: Dormant,
    popular:'Popular',
    title: 'Engage Dormant Users',
    text: 'Engage users who may have ghosted you',
    link:'/hail_mary_mail',
  }
];


export const Linkedin = [
  {
    socialtype: AdLinkDescriptions,
    title: 'Ad Link Description',
    text: 'Drive Thought Leadership through LinkedIn Text Ads',
    link:'/linkedinlinkdesc',
  },
  {
    socialtype: CarouselAds,
    title: 'Carousel Ads',
    text: 'Storyboard inspiration for LinkedIn carousel ads',
    link:'/carousel_ads',
  },
  {
    socialtype: Dynamic,
    title: 'Dynamic Ads',
    text: 'Engage prospects with right-rail ads on LinkedIn ',
    link:'/dynamic_ads',
  },
  {
    socialtype: SalesEmail,
    popular:'Popular',
    title: 'Sales Emails',
    text: 'Direct messages to your audience to spark action',
    link:'/sponsored_msg',
  },
  {
    socialtype: Investors,
    title: 'Cold Calling Investors',
    text: 'Stand out among hundreds of cold calling emails',
    link:'/coldcalling',
  },
  {
    socialtype: Recruiters,
    popular:'Popular',
    title: 'Cold Calling Recruiters',
    text: 'Apply for that dream job!',
    link:'/coldcalling_rec'
  },
  {
    socialtype: Conversional,
    popular:'Popular',
    title: 'Conversational Pitches',
    text: 'Short & crisp elevator pitch to connect with prospects',
    link:'/sponsored_msg'
  }
];

export const Website = [
  {
    socialtype: HeroText,
    title: 'Hero Text',
    text: 'Hero Text content for positioning your brand ',
    link:'/hero_text'
  },
  {
    socialtype: ProductReviews,
    title: 'Product Reviews',
    text: 'Lorem Ipsum is simply dummy text of the printing.',
    link:'/productreview'
  },
  {
    socialtype: ProductSolution,
    title: 'Problem-Solution',
    text: 'Translate customer pain-points into product benefits',
    link:'/problemsoln'

  },
  {
    socialtype: WebsiteDescription,
    popular:'Popular',
    title: 'Website Description',
    text: 'Tell Search engines what your website is all about',
    link:'/web_desc'

  },
  {
    socialtype: FeatureBenefits,
    title: 'Feature - Benefits',
    text: 'Convert product features into benefits ',
    link:'/feature_benefit'
  }
];

export const Article = [
  {
    socialtype: ArticleIdeas,
    title: 'Article ideas',
    text: 'Convert keywords into article ideas',
    link:'/article_ideas'

  },
  {
    socialtype: articletitle,
    title: 'Article Title',
    text: 'Non clickbait yet engaging headlines',
    link:'article_title'
  },
  {
    socialtype: Outlines,
    popular:'Popular',
    title: 'Article Outlines',
    text: 'Framework for your next article',
    link:'/article_outlines'

  },
  {
    socialtype: Intro,
    popular:'Popular',
    title: 'Article Intro',
    text: 'Let AI write the first 200 words of your article',
    link:'/article_intro'

  }
];

export const Event = [
  {
    socialtype: EventPromoEmails,
    title: 'Event Promo Emails',
    popular:'Popular',
    text: 'Drive registrations for events',
    link:'/event_promo_mail'

  },
  {
    socialtype: WebinarPromoEmails,
    title: 'Webinar Promo Emails',
    text: 'Drive Registrations for online format events',
    link:'/webinar_promo_mail'
  },
  {
    socialtype: EventFollowupEmailsupEmailsro,
    title: 'Event Follow-up Emails',
    text: 'Block your calendar reminders and follow-ups',
    link:'event_followup_mail'

  },
  {
    socialtype: EventDigitalAds,
    popular:'Popular',
    title: 'Event Digital Ads',
    text: 'Ad copy fine tuned for event promotions',
    link:'event_digitalads'

  }
];

export const Writing = [
  {
    socialtype: Write,
    title: 'Write Like Me',
    text: 'Write Like Me',
    link:'/write_like_me'
  }
];