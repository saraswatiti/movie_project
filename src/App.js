import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import { CubeGrid } from "styled-loaders-react";
import Footer from "./Components/Footer";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Nowplaygrid from "./Components/Pages/Nowplaygrid";

import SearchResult from "./Components/Pages/SearchResult";

import Nowplaying from "./Components/Homepage/Nowplaying";
const Homepage = React.lazy(() => import("./Components/Homepage"));
const SinglePage = React.lazy(() => import("./Components/SinglePage"));
function App(props) {
  return (
    <div className="App">
      <HashRouter basename="/">
        {/* <Header {...props} /> */}
        <React.Suspense
          fallback={<CubeGrid color="red" size="60px" duration="1.5s" />}
        >
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/movies/:id" component={SinglePage} />
            <Route path="/nowplaying" component={Nowplaying} />
            <Route path="/pages/nowplay_grid" component={Nowplaygrid} />
            <Route path="/search" component={SearchResult} />
          </Switch>
        </React.Suspense>
        <Footer />
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          EasingType="easeInCubic"
        />
      </HashRouter>
    </div>
  );
}

export default App;
