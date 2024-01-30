import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RoutesPrivate from "./RotaPrivada";
import Cadastro from "./pages/Cadastro";
const Rout = () => (
    <BrowserRouter>
        <Switch>
          <RoutesPrivate exact path="/cadastro" component={Cadastro}></RoutesPrivate>
          <RoutesPrivate exact path="/" component={Home}></RoutesPrivate>
          <Route  exact path="/login" component={Login}/>
        </Switch>
    </ BrowserRouter>
  );
  export default Rout;