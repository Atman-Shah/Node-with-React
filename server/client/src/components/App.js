import React, { useEffect } from "react";
import Router from "../Router";
import Header from "./Header";
import { fetchUser } from "../helper";
import { authAtom } from "../states";
import { useAtom } from "jotai";

const App = () => {
  const [auth, setAuth] = useAtom(authAtom);

  useEffect(() => {
    (async () => {
      const user = await fetchUser();
      setAuth(user || false);
    })();
  }, []);

  useEffect(() => {
    console.log("auth", auth);
  }, [auth]);

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
