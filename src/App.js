import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import {Route} from "react-router-dom";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route path="/characters">
        <SearchForm />
      </Route>
    </main>
  );
}
