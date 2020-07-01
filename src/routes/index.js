import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

//Screens
import Login from '../screens/login';
import UsersList from '../screens/usersList';

function AppRoute() {
   return (
      <Switch>
         <Route path="/" component={Login} exact />
         <ProtectedRoute path="/users" component={UsersList} exact />
         <Route path="*" component={() => <div className="page-404">404 NOT FOUND</div>} />
      </Switch>
   );
}

export default AppRoute;
