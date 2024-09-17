// import { useState } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
