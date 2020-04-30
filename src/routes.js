import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalFeed from "./pages/GlobalFeed/GlobalFeed";
import Article from "./pages/Article/Article";
import Auth from "./pages/Auth/Auth";
import Settings from "./pages/Settings/Settings";
import UserProfile from "./pages/UserProfile/UserProfile";
import TagFeed from "./components/TagFeed/TagFeed";
import YourFeed from "./components/YourFeed/YourFeed";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import EditArticle from "./components/EditArticle/EditArticle";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/profile/:slug" component={UserProfile} />
      <Route path="/profile/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
    </Switch>
  );
};
