/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Router, Route } from "@solidjs/router";

import App from "./App";
import BookDetails from "./pages/BookDetails";
import ExploreBooks from "./pages/ExploreBooks";
import OnBoardScreen from "./pages/OnBoardScreen";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={OnBoardScreen} />
      <Route path="/home" component={App} />
      <Route path="/explore" component={ExploreBooks} />
      <Route path="/:id" component={BookDetails} />
    </Router>
  ), root
);
