import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTools from '../pages/AllTools';
import Dashboard from '../pages/Dashboard';
import Pricing from '../pages/Pricing';
import Profile from '../pages/Profile';
import Support from '../pages/Support';
import Workspace from '../pages/Workspace';
import ProjectEdit from '../pages/ProjectEdit';
import WebsiteToolkit from '../pages/WebsiteToolkit';
import { Ckeditor5Build } from '../pages/WorkspaceSwitch';
import GoogleAds from '../pages/DigitalAds/GoogleAds';
import MobileAppNotifications from '../pages/DigitalAds/MobileAppNotifications';
import ABTesting from '../pages/DigitalAds/ABTesting';
import FacebookAds from '../pages/DigitalAds/FacebookAds';
import LinkedinDescription from '../pages/DigitalAds/LinkedinDescriptions';
import LinekedinTextAds from '../pages/DigitalAds/LinkedinTextAds';

import FreeuserEngagement from '../pages/EmailToolkit/FreeUserEngagement';
import HailMaryPass from '../pages/EmailToolkit/HailMaryPass';
import NewLeadEngagement from '../pages/EmailToolkit/NewLeadEngagement';
import PostPurchaseEngagement from '../pages/EmailToolkit/PostPurchaseEngagement';
import SalesEmails from '../pages/EmailToolkit/SalesEmails';
import ScheduleProductDeom from '../pages/EmailToolkit/SchedulepRoductDemo';


import AdLinkDescriptions from '../pages/LinkedinToolkit/AdLinkDescriptions';
import CarouselAds from '../pages/LinkedinToolkit/CarouselAds';
import DynamicAds from '../pages/LinkedinToolkit/DynamicAds';
import ConversationalPitches from '../pages/LinkedinToolkit/ConversationalPitches';
import SalesInMails from '../pages/LinkedinToolkit/SalesInMails';
import ColdCallingInvestors from '../pages/LinkedinToolkit/ColdCallingInvestors';
import ColdCallingRecruiters from '../pages/LinkedinToolkit/ColdCallingRecruiters';



import HeroText from '../pages/WebsiteToolkit/HeroText';
import ProductReview from '../pages/WebsiteToolkit/ProductReview';
import ProblemSolution from '../pages/WebsiteToolkit/ProblemSolution';
import WebsiteDescription from '../pages/WebsiteToolkit/WebsiteDescription';
import FeatureBenefits from '../pages/WebsiteToolkit/FeatureBenefits';

import ArticleIdeas from '../pages/ArticelToolkit/ArticleIdeas';
import ArticleTitle from '../pages/ArticelToolkit/ArticleTitle';
import ArticleOutlines from '../pages/ArticelToolkit/ArticleOutlines';
import ArticleIntro from '../pages/ArticelToolkit/ArticleIntro';


import EventPromoEmails from '../pages/EventToolkit/EventPromoEmails';
import EventDigitalAds from '../pages/EventToolkit/EventDigitalAds';
import EventFollowUpEmails from '../pages/EventToolkit/EventFollowUpEmails';
import WebinarPromoEmails from '../pages/EventToolkit/WebinarPromoEmails';


import WriteLikeMe from '../pages/WritingToolkit/WriteLikeMe';

import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { Terms } from '../pages/TermsAndConditions';
import PasswordChange from '../pages/PasswordChange';
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="innerPage">
          <AllTools />
        </div>
      </Route>
      <Route path="/Dashboard">
        <div className="innerPage">
          <Dashboard />
        </div>
      </Route>
      <Route path="/Workspace">
        <div className="innerPage">
          <Workspace />
        </div>
      </Route>
      <Route path="/Profile">
        <div className="innerPage">
          <Profile />
        </div>
      </Route>
      <Route path="/Pricing">
        <div className="innerPage">
          <Pricing />
        </div>
      </Route>
      <Route path="/Support">
        <div className="innerPage">
          <Support />
        </div>
      </Route>
      <Route path="/Projectedit">
        <div className="innerPage">
          <ProjectEdit />
        </div>
      </Route>
      <Route path="/WebsiteToolkit">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/LinkedinToolkit">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/EmailToolkit">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/Digital">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/ArticleToolkit">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/WritingToolkit">
        <div className="innerPage">
          <WebsiteToolkit />
        </div>
      </Route>
      <Route path="/workspaceedit">
        <div className="innerPage">
          <Ckeditor5Build />
        </div>
      </Route>

      {/* Digital Ads */}
      <Route path="/google-adsense">
        <div className="innerPage">
          <GoogleAds />
        </div>
        </Route>
        <Route path="/mobile_notification">
        <div className="innerPage">
          <MobileAppNotifications />
        </div>
      </Route>
      <Route path="/facebookads">
        <div className="innerPage">
          <FacebookAds />
        </div>
      </Route>
      <Route path="/linkedinads">
        <div className="innerPage">
          <LinekedinTextAds />
        </div>
      </Route>
      <Route path="/meta_tags">
        <div className="innerPage">
          <LinkedinDescription />
        </div>
      </Route>
      <Route path="/ad_copies">
        <div className="innerPage">
          <ABTesting />
        </div>
      </Route>

      {/* Ends Here */}


      {/* Email Toolkit */}
       <Route path="/sales_emails">
        <div className="innerPage">
          <SalesEmails />
        </div>
        </Route>
        <Route path="/new_lead_engagement">
        <div className="innerPage">
          <NewLeadEngagement />
        </div>
      </Route>
      <Route path="/free_user_engagement">
        <div className="innerPage">
          <FreeuserEngagement />
        </div>
      </Route>
      <Route path="/post_purchase_engagement">
        <div className="innerPage">
          <PostPurchaseEngagement />
        </div>
      </Route>
      <Route path="/schedule_product_demo">
        <div className="innerPage">
          <ScheduleProductDeom />
        </div>
      </Route>
      <Route path="/hail_mary_mail">
        <div className="innerPage">
          <HailMaryPass />
        </div>
      </Route>

      {/* Ends Here */}


     {/* LinkedIn Toolkit */}
       <Route path="/linkedinlinkdesc">
        <div className="innerPage">
          <AdLinkDescriptions />
        </div>
        </Route>
        <Route path="/carousel_ads">
        <div className="innerPage">
          <CarouselAds />
        </div>
      </Route>
      <Route path="/dynamic_ads">
        <div className="innerPage">
          <DynamicAds />
        </div>
      </Route>
      <Route path="/sponsored_msg">
        <div className="innerPage">
          <ConversationalPitches />
        </div>
      </Route>
      <Route path="/sponsoredmail">
        <div className="innerPage">
          <SalesInMails />
        </div>
      </Route>
      <Route path="/coldcalling">
        <div className="innerPage">
          <ColdCallingInvestors />
        </div>
      </Route>
      <Route path="/coldcalling_rec">
        <div className="innerPage">
          <ColdCallingRecruiters />
        </div>
      </Route>
      {/* Ends Here */}


     {/* Website Toolkit */}
     <Route path="/hero_text">
        <div className="innerPage">
          <HeroText />
        </div>
        </Route>
        <Route path="/productreview">
        <div className="innerPage">
          <ProductReview />
        </div>
      </Route>
      <Route path="/problemsoln">
        <div className="innerPage">
          <ProblemSolution />
        </div>
      </Route>
      <Route path="/web_desc">
        <div className="innerPage">
          <WebsiteDescription />
        </div>
      </Route>
      <Route path="/feature_benefit">
        <div className="innerPage">
          <FeatureBenefits />
        </div>
      </Route>
      {/* Ends Here */}


     {/* Article Toolkit */}
     <Route path="/article_ideas">
        <div className="innerPage">
          <ArticleIdeas />
        </div>
        </Route>
        <Route path="/article_title">
        <div className="innerPage">
          <ArticleTitle />
        </div>
      </Route>
      <Route path="/article_outlines">
        <div className="innerPage">
          <ArticleOutlines />
        </div>
      </Route>
      <Route path="/article_intro">
        <div className="innerPage">
          <ArticleIntro />
        </div>
        </Route>
        {/* Ends Here */}


      {/* Event Toolkit */}
     <Route path="/event_promo_mail">
        <div className="innerPage">
          <EventPromoEmails />
        </div>
        </Route>
        <Route path="/webinar_promo_mail">
        <div className="innerPage">
          <WebinarPromoEmails />
        </div>
      </Route>
      <Route path="/event_followup_mail">
        <div className="innerPage">
          <EventFollowUpEmails />
        </div>
      </Route>
      <Route path="/event_digitalads">
        <div className="innerPage">
          <EventDigitalAds />
        </div>
        </Route>
        {/* Ends Here */}


      {/* Event Toolkit */}


      <Route path="/write_like_me">
        <div className="innerPage">
          <WriteLikeMe />
        </div>
        </Route>
        {/* Ends Here */}


        <Route path="/privacy_policy">
        <div className="innerPage">
          <PrivacyPolicy />
        </div>
        </Route>

        <Route path="/terms_conditions">
        <div className="innerPage">
          <Terms />
        </div>
        </Route>

        <Route path="/Passwordchange">
        <div className="innerPage">
          <PasswordChange />
        </div>
        </Route>

        
    </Switch>
  );
};

export default Routing;
