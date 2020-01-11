import React from "react";
import Footer from "./static/Footer";
import Header from "./static/Header";
import Router from "../config/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
