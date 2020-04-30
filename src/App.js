import React from "react";
import Routes from "./routes";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Routes />
    </div>
  );
};

export default App;
