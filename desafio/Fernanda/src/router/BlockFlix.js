import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { publicRoutes, privateRoutes } from "./router";
import { MyContext } from "../context/context";

function BlockFlix() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path}>
              <Component />
            </Route>
          );
        })}
        <PrivateRoute>
          {privateRoutes.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} exact path={route.path}>
                <Component />
              </Route>
            );
          })}
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { isLogged } = useContext(MyContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default BlockFlix;
