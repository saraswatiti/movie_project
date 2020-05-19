import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import { CubeGrid } from "styled-loaders-react";
import Footer from "./Components/Footer";
import Nowplaygrid from "./Components/Pages/Nowplaygrid";
const Homepage = React.lazy(() => import("./Components/Homepage"));
const SinglePage = React.lazy(() => import("./Components/SinglePage"));
function App() {
  const [loadering, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loadering ? (
        <div className="loading">
          <CubeGrid color="red" size="60px" duration="1.5s" />
        </div>
      ) : (
        <HashRouter basename="/">
          <Header />
          <React.Suspense fallback={"loading..........."}>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/movies/:id" component={SinglePage} />
              <Route path="/pages/Nowplaygrid" component={Nowplaygrid} />
            </Switch>
          </React.Suspense>
          <Footer />
        </HashRouter>
      )}
    </div>
  );
}

export default App;
