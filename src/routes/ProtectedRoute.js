import React from "react";
import { Route, Redirect } from "react-router-dom";
import { USER_TOKEN } from "../config/localkeys";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
   return (
      <Route {...rest}
         render={props => {
            if (localStorage.getItem(USER_TOKEN)) {
               return <Component {...props} />;
            } else {
               return <Redirect to="/?msg=session expired please login again" />
            }
         }}
      />
   );
};