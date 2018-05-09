import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Toolbar from "./components/ToolBar";






const App = () =>
<div> 
  <Router>
    <div>
      <Toolbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/compare" component={Compare}/>
      </Switch>
      </div>
  </Router>
  </div>
  ;

export default App;
