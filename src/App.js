import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

import Auth from "./components/Auth/Auth";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Profile from "./components/User/Profile/Profile";
import Account from "./components/User/Account/Account";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#30ef9a",
    },
    secondary: {
      main: "#0d1e3a",
    },
  },
  typography: {
    fontFamily: ["Sora"],
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Container disableGutters maxWidth={false}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={Form} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/account" exact component={Account} />
          </Switch>
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
