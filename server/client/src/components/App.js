import React, { useEffect } from "react";
import Router from "../Router";
import { fetchUser } from "../helper";
import { authAtom } from "../states";
import { useAtom } from "jotai";

const App = () => {
  const [, setAuth] = useAtom(authAtom);

  useEffect(() => {
    (async () => {
      const user = await fetchUser();
      setAuth(user || false);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  return (
    <div className="container">
      <div className="App">
        <Router />
      </div>
    </div>
  );
};

export default App;
