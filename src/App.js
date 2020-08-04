//import Loadable from 'react-loadable';
import React, { Component } from 'react';
import { themeContext, themes, getTheme, getThemeHexa } from './context/theme-context'
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// Define all Route
import getRoute from './components/Route/Router'
const Loading = () => <div>Loading...</div>
// const NavBarGeneric = loadable(() => import('./components/NavBar'), {
//   LoadingComponent: Loading,
// })

// const NavBarGeneric = Loadable({
//   loader: () => import('./components/NavBar'),
//   loading: loading
// });

const colorNameTheme = 'twitter'
const colorNameTheme2 = 'gold'

class App extends Component {

  render() {
    return (
      <Router>
          <Switch>
            <themeContext.Provider value={{
              colorTheme: getTheme(colorNameTheme),
              colorTheme2: getTheme(colorNameTheme2),
              colorThemeHexa: getThemeHexa(colorNameTheme),
              colorTheme2Hexa: getThemeHexa(colorNameTheme2),
              theme: themes
              }}>
              {/* <Navigation> */}
              <ToastContainer />
              {getRoute.map((routeApp, i) => (
                routeApp.hasOwnProperty("exact") &&
                <Route
                  exact
                  key={routeApp.key || routeApp.path}
                  path={routeApp.path}>{routeApp.component}</Route>

              ))}

              {/* {getRoute.map((routeApp, i) => (
                !routeApp.hasOwnProperty("exact") &&
                <Route
                  key={routeApp.key || routeApp.path}
                  path={routeApp.path}
                  screen
                  screenProps={{
                    style: routeApp.screenProps
                  }}
                >
                  {routeApp.component}
                </Route>
              ))} */}
              {getRoute.map((routeApp, i) => (
                !routeApp.hasOwnProperty("exact") &&
                <Route
                  key={routeApp.key || routeApp.path}
                  path={routeApp.path}>{routeApp.component}</Route>
              ))}
              {/* </Navigation> */}
            </themeContext.Provider>
          </Switch>
      </Router>
    );
  }
}

export default App;
