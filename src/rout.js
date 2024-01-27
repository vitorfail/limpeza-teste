import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Login from "./pages/Login";
const Rout = () => (
    <BrowserRouter>
        <Switch>
          <Route  exact path="/home" component={Home}/>
          <Route  exact path="/" component={Login}/>

        </Switch>
    </ BrowserRouter>
  );
  export default Rout;