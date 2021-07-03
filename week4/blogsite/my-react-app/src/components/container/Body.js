import { Route, Switch } from "react-router";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Post from "../pages/Post";
 
export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/post/:slug" component={Post} /> { /* what's :slug? You'll learn it */ }
    </Switch>
  );
}