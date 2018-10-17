//import 3 components (Home, Page2, Page3)
import React from "react";
import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";

import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Page2" component={Page2} />
    <Route path="/Page3" component={Page3} />
  </Switch>
);
