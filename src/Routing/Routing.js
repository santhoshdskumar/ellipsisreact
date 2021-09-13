import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
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
import Usage from '../pages/Usage';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ForgotPassword from '../pages/ForgorPassword/ForgotPassword';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavBar from '../components/Header/NavBar';
import SideMain from '../components/Sidebar/SideMain';
import Verification from '../pages/Verification.js';

import ArticleGenerator from '../pages/ArticleGenerator/ArticleGenerator';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Routing = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <BrowserRouter>
      <Switch>
        {/* Publick Routes */}

        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute restricted={true} component={Login} path="/" exact />
        <PublicRoute
          restricted={true}
          component={Register}
          path="/Register"
          exact
        />
        <PublicRoute
          restricted={true}
          component={ForgotPassword}
          path="/password_reset"
          exact
        />

        <PublicRoute restricted={true} component={PrivacyPolicy} path="/privacy_policy" exact />
        <PublicRoute restricted={true} component={Terms} path="/terms_conditions" exact />
        <PublicRoute restricted={true} component={Verification} path="/verification" exact />
        {/* Ends Here */}

        {/* Private Routes */}

        <div className={classes.root}>
          <SideMain />
          <main className={classes.content}>
            <div class="innerPage">
              <PrivateRoute component={Dashboard} path="/Dashboard" exact />
              <PrivateRoute component={AllTools} path="/Alltools" exact />
              <PrivateRoute component={Workspace} path="/Workspace" exact />
              <PrivateRoute component={Profile} path="/Profile" exact />
              <PrivateRoute component={Pricing} path="/Pricing" exact />
              <PrivateRoute component={Support} path="/Support" exact />
              <PrivateRoute component={ProjectEdit} path="/Projectedit" exact />


              <PrivateRoute
                component={GoogleAds}
                path="/google-adsense"
                exact
              />
              <PrivateRoute
                component={MobileAppNotifications}
                path="/mobile_notification"
                exact
              />
              <PrivateRoute component={FacebookAds} path="/facebookads" exact />
              <PrivateRoute
                component={LinekedinTextAds}
                path="/linkedinads"
                exact
              />
              <PrivateRoute
                component={LinkedinDescription}
                path="/meta_tags"
                exact
              />
              <PrivateRoute component={ABTesting} path="/ad_copies" exact />

              <PrivateRoute
                component={SalesEmails}
                path="/sales_emails"
                exact
              />
              <PrivateRoute
                component={NewLeadEngagement}
                path="/new_lead_engagement"
                exact
              />
              <PrivateRoute
                component={FreeuserEngagement}
                path="/free_user_engagement"
                exact
              />
              <PrivateRoute
                component={PostPurchaseEngagement}
                path="/post_purchase_engagement"
                exact
              />
              <PrivateRoute
                component={ScheduleProductDeom}
                path="/schedule_product_demo"
                exact
              />
              <PrivateRoute
                component={HailMaryPass}
                path="/activate_dormant_users"
                exact
              />

              <PrivateRoute
                component={AdLinkDescriptions}
                path="/linkedinlinkdesc"
                exact
              />
              <PrivateRoute
                component={CarouselAds}
                path="/carousel_ads"
                exact
              />
              <PrivateRoute component={DynamicAds} path="/dynamic_ads" exact />
              <PrivateRoute
                component={ConversationalPitches}
                path="/sponsored_msg"
                exact
              />
              <PrivateRoute
                component={SalesInMails}
                path="/sponsoredmail"
                exact
              />
              <PrivateRoute
                component={ColdCallingInvestors}
                path="/coldcalling"
                exact
              />
              <PrivateRoute
                component={ColdCallingRecruiters}
                path="/coldcalling_rec"
                exact
              />

              <PrivateRoute component={HeroText} path="/hero_text" exact />
              <PrivateRoute
                component={ProductReview}
                path="/productreview"
                exact
              />
              <PrivateRoute
                component={ProblemSolution}
                path="/problemsoln"
                exact
              />
              <PrivateRoute
                component={WebsiteDescription}
                path="/web_desc"
                exact
              />
              <PrivateRoute
                component={FeatureBenefits}
                path="/feature_benefit"
                exact
              />

              <PrivateRoute
                component={ArticleIdeas}
                path="/article_ideas"
                exact
              />
              <PrivateRoute
                component={ArticleTitle}
                path="/article_title"
                exact
              />
              <PrivateRoute
                component={ArticleOutlines}
                path="/article_outlines"
                exact
              />
              <PrivateRoute
                component={ArticleIntro}
                path="/article_intro"
                exact
              />

              <PrivateRoute
                component={EventPromoEmails}
                path="/event_promo_mail"
                exact
              />
              <PrivateRoute
                component={WebinarPromoEmails}
                path="/webinar_promo_mail"
                exact
              />
              <PrivateRoute
                component={EventFollowUpEmails}
                path="/event_followup_mail"
                exact
              />
              <PrivateRoute
                component={EventDigitalAds}
                path="/event_digitalads"
                exact
              />

              <PrivateRoute
                component={WriteLikeMe}
                path="/write_like_me"
                exact
              />


              <PrivateRoute
                component={PasswordChange}
                path="/Passwordchange"
                exact
              />
              <PrivateRoute component={Usage} path="/Usage" exact />
              <PrivateRoute
                component={Ckeditor5Build}
                path="/workspaceedit"
                exact
              />

              <PrivateRoute
                component={ArticleGenerator}
                path="/articlegenerator"
                exact
              />
            </div>
          </main>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
