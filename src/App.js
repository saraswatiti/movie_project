import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
const Homepage = React.lazy(() => import("./Components/Homepage"));
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <React.Suspense fallback={"loading..........."}>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
