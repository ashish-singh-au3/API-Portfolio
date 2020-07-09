import React from "react";
import { Switch } from "react-mdl";
import { Route } from "react-router-dom";
import Home from "./Home";
//import about from "./about";
import contact from "./contact";
import Work from "./Work";
import Landing from "./Landing";
import education from "./education";

export default function main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/education" component={education} />
      </Switch>
    </div>
  );
}
