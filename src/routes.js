import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Users from "./Containers/Users";

function Routes() {
  return (
    <Router>
      <Switch> {/* Switch virou Routes, SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6. */}
        <Route exact path="/" component={Home} />
        {/* exact NÃO é mais utilizado, SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6. */}
        {/* component virou element. E A SINTAXE É ELEMENT={<Home />},SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6. */}
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default Routes;
