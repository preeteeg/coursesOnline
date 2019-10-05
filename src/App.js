import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/homepage.component";
import "./App.css";
import AboutUs from "./components/aboutUs/aboutUs.component";
import CoursesPage from "./components/courses/courses.component";
import Header from "./components/header/header.component";
import PageNotFound from "./components/pageNotFound/pageNotFound.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact component={Homepage} path="/"></Route>
        <Route exact component={CoursesPage} path="/courses"></Route>
        <Route exact component={AboutUs} path="/aboutus"></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
