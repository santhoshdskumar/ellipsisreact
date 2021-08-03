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
    </Switch>
  );
};

export default Routing;
