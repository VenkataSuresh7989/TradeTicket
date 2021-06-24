//import logo from './logo.svg';
import "./App.css";
import Register from "./Components/Register/Register";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Login from "./Components/Login/Login";
import BuyTicket from "./Components/BuyTicket/BuyTicket";
import ResaleTicket from "./Components/ResaleTicket/ResaleTicket";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      {/* <h1> Hello Suresh;</h1>

      <NavBar />
      <Register /> */}

      <HashRouter>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/buyticket" component={BuyTicket} />
            <Route path="/resaleticket" component={ResaleTicket} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
