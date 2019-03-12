import React, { Fragment, Component } from "react";
import "./styles/components/main.less";
import "./main.less";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/Main/Home";
import { Contact } from "./components/Main/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
