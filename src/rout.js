import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RoutesPrivate from "./RotaPrivada";
const Rout = () => (
    <BrowserRouter>
        <Switch>
          <RoutesPrivate exact path="/home" component={Home}></RoutesPrivate>
          <Route  exact path="/" component={Login}/>
        </Switch>
    </ BrowserRouter>
  );
  export default Rout;