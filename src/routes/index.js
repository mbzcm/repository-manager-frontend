import React from "react";
import {Route, Switch} from "react-router-dom";

import commitView from "./commitView/index";


const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}commits`} component={commitView}/>
    </Switch>
  </div>
);

export default App;
