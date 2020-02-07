import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import Team from "./pages/team/Team";
import Blog from "./pages/blog/Blog";
import Reviews from "./pages/reviews/Reviews";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/contacts" component={Contacts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
