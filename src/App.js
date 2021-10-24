import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path="/watch" exact>
          <Home />
        </Route>

        <Route path="/watch/products">
          <Products />
        </Route>

        <Route path="/watch/product/:id">
          <DetailProduct />
        </Route>

        <Route path="/watch/about">
          <About />
        </Route>

        <Route path="/watch/privacy-policy">
          <PrivacyPolicy />
        </Route>

        <Route path="/watch/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
