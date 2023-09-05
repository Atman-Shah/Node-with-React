import React from "react";
import Router from "../Router";

const Header = () => {return <h2>Header</h2>};

const App = () => {
    return (
        <div className="App">
            <Header />
            <Router />
        </div>
    );
};

export default App;