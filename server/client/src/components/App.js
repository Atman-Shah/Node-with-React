import React from "react";
import Router from "../Router";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Router />
      </div>
    </div>
  );
};

export default App;
