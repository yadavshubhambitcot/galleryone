import React from 'react' 
import Home from '../src/component/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/mdbreact/dist/css/mdb.css"
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import index from './component/index'
import Footer from "../src/hoc/layout/layout/component/footer";

import gallery from './component/gallery';
import About from './component/About';
import Header from './component/Header';
import '../src/assest/style.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import { createStore, applyMiddleware } from 'redux';
import rootreducer from './redux/reducer/rootreducer';
import Collections from '../src/component/collections';
import  Contact  from '../src/component/Contact';



const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/upload" component={index} />
            <Route exact path="/gallery" component={gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/collections" component={Collections} />
             <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
