import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProviders";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout childlen={route.children} />
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
});