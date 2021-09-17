import Home from "./Home";
import Pagecart from "./components/Pagecart";
import Status from "./components/Status.jsx"
import { BrowserRouter, Route, Switch } from "react-router-dom";



export default function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/carrinho" component={Pagecart} />
          <Route path="/sobre/:id" component={Status} />
        </Switch>
      </BrowserRouter>
    );
  }