import React, { useState } from "react";
import Router from "./components/Router";
export const routeContext = React.createContext();

function App() {
  const routePages = [
    { title: "Landing", path: "/" },
    { title: "Login", path: "/login" },
  ];

  return (
    <>
      <routeContext.Provider value={routePages}>
        <Router />
      </routeContext.Provider>
    </>
  );
}

export default App;
