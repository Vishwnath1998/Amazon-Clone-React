import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Main from './Component/Main'
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import Order from './Component/Order';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (


    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Order'>
          <Order/>
          </Route>
          <Route path = '/'>
          <Home />
          <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
