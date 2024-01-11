/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import BookDetails from "./pages/BookDetails";
import ExploreBooks from "./pages/ExploreBooks";
import BottomNav from "./widgets/BottomNav";
import { Router, Route } from "@solidjs/router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
        <Route path="/" component={App} />
        <Route path="/explore" component={ExploreBooks} />
        <Route path="/:id" component={BookDetails} />
    </Router>
  ),root
);
