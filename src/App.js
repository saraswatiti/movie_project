import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App";
import Footer from "./Components/Footer";
const Homepage = React.lazy(() => import("./Components/Homepage"));
const SinglePage = React.lazy(() => import("./Components/SinglePage"));
function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <React.Suspense fallback={"loading..........."}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/movies/:id" component={SinglePage} />
          </Switch>
        </React.Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
