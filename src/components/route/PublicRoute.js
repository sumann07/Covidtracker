import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../auth/Util";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route like login
    <Route
      {...rest}
      render={(props) =>
        isAuth() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;