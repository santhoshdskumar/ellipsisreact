// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AllTools from '../pages/AllTools';
// import Dashboard from '../pages/Dashboard';
// import Pricing from '../pages/Pricing';
// import Profile from '../pages/Profile';
// import Support from '../pages/Support';
// import Workspace from '../pages/Workspace';
// import ProjectEdit from '../pages/ProjectEdit';
// import WebsiteToolkit from '../pages/WebsiteToolkit';
// import { Ckeditor5Build } from '../pages/WorkspaceSwitch';
// import GoogleAds from '../pages/DigitalAds/GoogleAds';
// import MobileAppNotifications from '../pages/DigitalAds/MobileAppNotifications';
// import ABTesting from '../pages/DigitalAds/ABTesting';
// import FacebookAds from '../pages/DigitalAds/FacebookAds';
// import LinkedinDescription from '../pages/DigitalAds/LinkedinDescriptions';
// import LinekedinTextAds from '../pages/DigitalAds/LinkedinTextAds';

// import FreeuserEngagement from '../pages/EmailToolkit/FreeUserEngagement';
// import HailMaryPass from '../pages/EmailToolkit/HailMaryPass';
// import NewLeadEngagement from '../pages/EmailToolkit/NewLeadEngagement';
// import PostPurchaseEngagement from '../pages/EmailToolkit/PostPurchaseEngagement';
// import SalesEmails from '../pages/EmailToolkit/SalesEmails';
// import ScheduleProductDeom from '../pages/EmailToolkit/SchedulepRoductDemo';

// import AdLinkDescriptions from '../pages/LinkedinToolkit/AdLinkDescriptions';
// import CarouselAds from '../pages/LinkedinToolkit/CarouselAds';
// import DynamicAds from '../pages/LinkedinToolkit/DynamicAds';
// import ConversationalPitches from '../pages/LinkedinToolkit/ConversationalPitches';
// import SalesInMails from '../pages/LinkedinToolkit/SalesInMails';
// import ColdCallingInvestors from '../pages/LinkedinToolkit/ColdCallingInvestors';
// import ColdCallingRecruiters from '../pages/LinkedinToolkit/ColdCallingRecruiters';

// import HeroText from '../pages/WebsiteToolkit/HeroText';
// import ProductReview from '../pages/WebsiteToolkit/ProductReview';
// import ProblemSolution from '../pages/WebsiteToolkit/ProblemSolution';
// import WebsiteDescription from '../pages/WebsiteToolkit/WebsiteDescription';
// import FeatureBenefits from '../pages/WebsiteToolkit/FeatureBenefits';

// import ArticleIdeas from '../pages/ArticelToolkit/ArticleIdeas';
// import ArticleTitle from '../pages/ArticelToolkit/ArticleTitle';
// import ArticleOutlines from '../pages/ArticelToolkit/ArticleOutlines';
// import ArticleIntro from '../pages/ArticelToolkit/ArticleIntro';

// import EventPromoEmails from '../pages/EventToolkit/EventPromoEmails';
// import EventDigitalAds from '../pages/EventToolkit/EventDigitalAds';
// import EventFollowUpEmails from '../pages/EventToolkit/EventFollowUpEmails';
// import WebinarPromoEmails from '../pages/EventToolkit/WebinarPromoEmails';

// import WriteLikeMe from '../pages/WritingToolkit/WriteLikeMe';

// import { PrivacyPolicy } from '../pages/PrivacyPolicy';
// import { Terms } from '../pages/TermsAndConditions';
// import PasswordChange from '../pages/PasswordChange';
// import Usage from '../pages/Usage';
// const PrivatePath = () => {
//   const [errorMessage, updateErrorMessage] = useState(null);

//   return (
//     <Switch>
//       <PrivateRoute path="/Alltools">
//         <div className="innerPage">
//           <AllTools showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Workspace">
//         <div className="innerPage">
//           <Workspace showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Profile">
//         <div className="innerPage">
//           <Profile showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Pricing">
//         <div className="innerPage">
//           <Pricing showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Support">
//         <div className="innerPage">
//           <Support showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Projectedit">
//         <div className="innerPage">
//           <ProjectEdit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/WebsiteToolkit">
//         <div className="innerPage">
//           <WebsiteToolkit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/LinkedinToolkit">
//         <div className="innerPage">
//           <WebsiteToolkit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/EmailToolkit">
//         <div className="innerPage">
//           <WebsiteToolkit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Digital">
//         <div className="innerPage">
//           <WebsiteToolkit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/ArticleToolkit">
//         <div className="innerPage">
//           <WebsiteToolkit showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/WritingToolkit">
//         <div className="innerPage">
//           <WebsiteToolkit
//             showError={updateErrorMessage}
//             showError={updateErrorMessage}
//           />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/workspaceedit">
//         <div className="innerPage">
//           <Ckeditor5Build showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Digital Ads*/}
//       <PrivateRoute path="/google-adsense">
//         <div className="innerPage">
//           <GoogleAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/mobile_notification">
//         <div className="innerPage">
//           <MobileAppNotifications />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/facebookads">
//         <div className="innerPage">
//           <FacebookAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/linkedinads">
//         <div className="innerPage">
//           <LinekedinTextAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/meta_tags">
//         <div className="innerPage">
//           <LinkedinDescription
//             showError={updateErrorMessage}
//             showError={updateErrorMessage}
//           />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/ad_copies">
//         <div className="innerPage">
//           <ABTesting />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* Email Toolkit*/}
//       <PrivateRoute path="/sales_emails">
//         <div className="innerPage">
//           <SalesEmails showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/new_lead_engagement">
//         <div className="innerPage">
//           <NewLeadEngagement showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/free_user_engagement">
//         <div className="innerPage">
//           <FreeuserEngagement showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/post_purchase_engagement">
//         <div className="innerPage">
//           <PostPurchaseEngagement showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/schedule_product_demo">
//         <div className="innerPage">
//           <ScheduleProductDeom showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/activate_dormant_users">
//         <div className="innerPage">
//           <HailMaryPass showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* LinkedIn Toolkit*/}
//       <PrivateRoute path="/linkedinlinkdesc">
//         <div className="innerPage">
//           <AdLinkDescriptions showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/carousel_ads">
//         <div className="innerPage">
//           <CarouselAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/dynamic_ads">
//         <div className="innerPage">
//           <DynamicAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/sponsored_msg">
//         <div className="innerPage">
//           <ConversationalPitches showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/sponsoredmail">
//         <div className="innerPage">
//           <SalesInMails showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/coldcalling">
//         <div className="innerPage">
//           <ColdCallingInvestors showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/coldcalling_rec">
//         <div className="innerPage">
//           <ColdCallingRecruiters showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* Website Toolkit*/}
//       <PrivateRoute path="/hero_text">
//         <div className="innerPage">
//           <HeroText showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/productreview">
//         <div className="innerPage">
//           <ProductReview showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/problemsoln">
//         <div className="innerPage">
//           <ProblemSolution showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/web_desc">
//         <div className="innerPage">
//           <WebsiteDescription showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/feature_benefit">
//         <div className="innerPage">
//           <FeatureBenefits showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* Article Toolkit*/}
//       <PrivateRoute path="/article_ideas">
//         <div className="innerPage">
//           <ArticleIdeas showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/article_title">
//         <div className="innerPage">
//           <ArticleTitle showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/article_outlines">
//         <div className="innerPage">
//           <ArticleOutlines showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/article_intro">
//         <div className="innerPage">
//           <ArticleIntro showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* Event Toolkit*/}
//       <PrivateRoute path="/event_promo_mail">
//         <div className="innerPage">
//           <EventPromoEmails showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/webinar_promo_mail">
//         <div className="innerPage">
//           <WebinarPromoEmails showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/event_followup_mail">
//         <div className="innerPage">
//           <EventFollowUpEmails showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/event_digitalads">
//         <div className="innerPage">
//           <EventDigitalAds showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       {/* Event Toolkit*/}
//       <PrivateRoute path="/write_like_me">
//         <div className="innerPage">
//           <WriteLikeMe showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       {/* Ends Here*/}
//       <PrivateRoute path="/privacy_policy">
//         <div className="innerPage">
//           <PrivacyPolicy showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/terms_conditions">
//         <div className="innerPage">
//           <Terms showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Passwordchange">
//         <div className="innerPage">
//           <PasswordChange showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//       <PrivateRoute path="/Usage">
//         <div className="innerPage">
//           <Usage showError={updateErrorMessage} />
//         </div>
//       </PrivateRoute>
//     </Switch>
//   );
// };

// export default PrivatePath;
