import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import Products from "./components/pages/products/Products";
import Team from "./components/pages/team/Team";
import Blog from "./components/pages/blog/Blog";
import Reviews from "./components/pages/reviews/Reviews";
import Contacts from "./components/pages/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
