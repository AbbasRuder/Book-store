/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Router, Route } from "@solidjs/router";

import App from "./App";
import BookDetails from "./pages/book-details";
import ExploreBooks from "./pages/explore";
import OnBoardScreen from "./pages/on-board-screen";
import Cart from "./pages/cart";
import Bookmarks from "./pages/bookmarks";
import Profile from "./pages/profile";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";
import SendOTP from "./pages/auth/send-otp";
import VerifyOTP from "./pages/auth/verify-otp";
import ChangePassword from "./pages/auth/change-password";

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
      <Route path="/login" component={Login} />      
      <Route path="/signup" component={SignUp} />    
      <Route path="/send-otp" component={SendOTP} />
      <Route path="/verify-otp" component={VerifyOTP} />
      <Route path="/change-password" component={ChangePassword} />

      <Route path="/home" component={App} />
      <Route path="/explore" component={ExploreBooks} />
      <Route path="/:id" component={BookDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/bookmark" component={Bookmarks} />
      <Route path="/profile" component={Profile} />
    </Router>
  ), root
);
