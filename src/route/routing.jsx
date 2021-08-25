import React from 'react'
import { Switch, Route, Redirect, Router } from "react-router-dom";
import About from '../component/About';
import gallery from '../component/gallery';
import Home from '../component/Home';
import index from '../component/index';


export default  () => {

    return (
      <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={index} />
          <Route exact path="/gallery" component={gallery} />
          <Route exact path="/about" component={About} />
          
            </Switch>
</Router>
  );
};