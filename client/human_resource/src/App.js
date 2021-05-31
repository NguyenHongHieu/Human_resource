import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login2";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
