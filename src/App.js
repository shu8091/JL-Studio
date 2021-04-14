import React from "react";
import { Switch, Route } from "react-router";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import WorkPage from "./pages/works/works.component";
import BlogPage from "./pages/blog/blog.component";
import Footer from "./components/footer/footer.component";
import GenericNotFound from "./components/404/generic-not-found.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* "Switch" It does not render anything else but that route */}
        <Route exact path="/" component={HomePage} />
        <Route path="/works" component={WorkPage} />
        <Route path="/blog" component={BlogPage} />
        <Route component={GenericNotFound} />
      </Switch>
      {console.log(
        "I hope there's nothing under the hood, anyway nice to meet ya here! :D"
      )}
      <Footer />
    </div>
  );
}

export default App;
