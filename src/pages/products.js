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
import ArticleGenerator from '../assets/images/icons/ArticleGenerator.svg';



export const Digital = [
  {
    id:'digital1',
    socialtype:GoogleAds,
    title: 'Google Ads',
    popular:'Popular',
    text: 'High converting ads for Google Search',
    link:'/google-adsense'
  },
  {
    id:'digital2',
    socialtype:facebook,
    title: 'Facebook Ads',
    text: 'Manage content for multiple audiences on Facebook ',
    link:'/facebookads'
  },
  {
    id:'digital3',
    socialtype: linkedin,
    title: 'LinkedIn Text Ads',
    text: 'Drive thought leadership with LinkedIn Text ads',
    link:'/linkedinads'
  },
  {
    id:'digital4',
    socialtype: MobileAppNotifications,
    title: 'Mobile App Notification',
    text: 'Engaging mobile app notification alerts',
    link:'/mobile_notification'
    
  },
  {
    id:'digital5',
    socialtype: Testing,
    title: 'Ad Copies For A/B Testing',
    text: 'Generate multiple variations for AB testing',
    link:'/ad_copies'

  },
  {
    id:'digital6',
    socialtype: Descriptions,
    title: 'Link Descriptions',
    text: 'Metadata for all your landing pages',
    link:'/meta_tags'
  },
];

export const Email = [
  {
    id:'email1',
    socialtype: SalesEmail,
    title: 'Sales Emails',
    text: 'Framework for writing thoughtful emails',
    link:'/sales_emails'
  },
  {
    id:'email2',
    socialtype: Lead,
    title: 'New Lead Engagement',
    text: 'Make a good first impression with new users',
    link:'/new_lead_engagement'
  },
  {
    id:'email3',
    socialtype: User,
    title: 'Free User Engagement',
    text: 'Convert free users into paid users',
    link:'/free_user_engagement'
  },
  {
    id:'email4',
    socialtype: Post,
    title: 'Post Purchase Engagement',
    text: 'Engage with existing users to reduce churn',
    link:'/post_purchase_engagement'
  },
  {
    id:'email5',
    socialtype: Schedule,
    popular:'Popular',
    title: 'Schedule Product Demo',
    text: 'Get that time time commitment from users for demo',
    link:'schedule_product_demo'
  },
  {
    id:'email6',
    socialtype: Dormant,
    popular:'Popular',
    title: 'Engage Dormant Users',
    text: 'Engage users who may have ghosted you',
    link:'/hail_mary_mail',
  }
];


export const Linkedin = [
  {
    id:'linkedin1',
    socialtype: AdLinkDescriptions,
    title: 'Ad Link Description',
    text: 'Drive thought leadership through linkedIn text ads',
    link:'/linkedinlinkdesc',
  },
  {
    id:'linkedin2',
    socialtype: CarouselAds,
    title: 'Carousel Ads',
    text: 'Storyboard inspiration for LinkedIn carousel ads',
    link:'/carousel_ads',
  },
  {
    id:'linkedin3',
    socialtype: Dynamic,
    title: 'Dynamic Ads',
    text: 'Engage prospects with right-rail ads on LinkedIn ',
    link:'/dynamic_ads',
  },
  {
    id:'linkedin4',
    socialtype: SalesEmail,
    popular:'Popular',
    title: 'Sales Emails',
    text: 'Direct messages to your audience to spark action',
    link:'/sponsored_msg',
  },
  {
    id:'linkedin5',
    socialtype: Investors,
    title: 'Cold Calling Investors',
    text: 'Stand out among hundreds of cold calling emails',
    link:'/coldcalling',
  },
  {
    id:'linkedin6',
    socialtype: Recruiters,
    popular:'Popular',
    title: 'Cold Calling Recruiters',
    text: 'Apply for that dream job!',
    link:'/coldcalling_rec'
  },
  {
    id:'linkedin7',
    socialtype: Conversional,
    popular:'Popular',
    title: 'Conversational Pitches',
    text: 'Short & crisp elevator pitch to connect with prospects',
    link:'/sponsored_msg'
  }
];

export const Website = [
  {
    id:'website1',
    socialtype: HeroText,
    title: 'Hero Text',
    text: 'Hero Text content for positioning your brand ',
    link:'/hero_text'
  },
  {
    id:'website2',
    socialtype: ProductReviews,
    title: 'Product Reviews',
    text: 'Convert product features into benefits',
    link:'/productreview'
  },
  {
    id:'website3',
    socialtype: ProductSolution,
    title: 'Problem-Solution',
    text: 'Translate customer pain-points into product benefits',
    link:'/problemsoln'

  },
  {
    id:'website4',
    socialtype: WebsiteDescription,
    popular:'Popular',
    title: 'Website Description',
    text: 'Tell Search engines what your website is all about',
    link:'/web_desc'

  },
  {
    id:'website5',
    socialtype: FeatureBenefits,
    title: 'Feature - Benefits',
    text: 'Convert product features into benefits ',
    link:'/feature_benefit'
  }
];

export const Article = [
  {
    id:'article1',
    socialtype: ArticleIdeas,
    title: 'Article ideas',
    text: 'Convert keywords into article ideas',
    link:'/article_ideas'

  },
  {
    id:'article2',
    socialtype: articletitle,
    title: 'Article Title',
    text: 'Non clickbait yet engaging headlines',
    link:'article_title'
  },
  {
    id:'article3',
    socialtype: Outlines,
    popular:'Popular',
    title: 'Article Outlines',
    text: 'Framework for your next article',
    link:'/article_outlines'

  },
  {
    id:'article4',
    socialtype: Intro,
    popular:'Popular',
    title: 'Article Intro',
    text: 'Let AI write the first 200 words of your article',
    link:'/article_intro'
  }
];

export const Event = [
  {
    id:'event1',
    socialtype: EventPromoEmails,
    title: 'Event Promo Emails',
    popular:'Popular',
    text: 'High impact event launch promotions',
    link:'/event_promo_mail'
  },
  {
    id:'event2',
    socialtype: WebinarPromoEmails,
    title: 'Webinar Promo Emails',
    text: 'Drive Registrations for online format events',
    link:'/webinar_promo_mail'
  },
  {

    id:'event3',
    socialtype: EventFollowupEmailsupEmailsro,
    title: 'Event Follow-up Emails',
    text: 'Block your calendar reminders and follow-ups',
    link:'event_followup_mail'

  },
  {
    id:'event4',
    socialtype: EventDigitalAds,
    popular:'Popular',
    title: 'Event Digital Ads',
    text: 'Ad copy fine tuned for event promotions',
    link:'event_digitalads'
  }
];

export const Writing = [
  {
    id:'writing1',
    socialtype: Write,
    title: 'Writings',
    text: 'AI writes the next 30 words of your article',
    link:'/write_like_me'
  }
];


export const Popular = [
  {
    id:'event4',
    socialtype: EventDigitalAds,
    popular:'Popular',
    title: 'Event Digital Ads',
    text: 'Ad copy fine tuned for event promotions',
    link:'event_digitalads'
  },
  {
    id:'event1',
    socialtype: EventPromoEmails,
    title: 'Event Promo Emails',
    popular:'Popular',
    text: 'High impact event launch promotions',
    link:'/event_promo_mail'
  },
  {
    id:'article4',
    socialtype: Intro,
    popular:'Popular',
    title: 'Article Intro',
    text: 'Let AI write the first 200 words of your article',
    link:'/article_intro'
  },
  {
    id:'article3',
    socialtype: Outlines,
    popular:'Popular',
    title: 'Article Outlines',
    text: 'Framework for your next article',
    link:'/article_outlines'

  },
  {
    id:'website4',
    socialtype: WebsiteDescription,
    popular:'Popular',
    title: 'Website Description',
    text: 'Tell Search engines what your website is all about',
    link:'/web_desc'

  },
  {
    id:'digital1',
    socialtype:GoogleAds,
    title: 'Google Ads',
    popular:'Popular',
    text: 'High converting ads for Google Search',
    link:'/google-adsense'
  },
  {
    id:'email5',
    socialtype: Schedule,
    popular:'Popular',
    title: 'Schedule Product Demo',
    text: 'Get that time time commitment from users for demo',
    link:'schedule_product_demo'
  },
];

export const ArticleGen = [
  {
    id:'event6',
    socialtype: ArticleGenerator,
    popular:'New',
    title: 'Article Generator',
    text: 'Generate full-length, original articles. ',
    link:'articlegenerator'
  },
];