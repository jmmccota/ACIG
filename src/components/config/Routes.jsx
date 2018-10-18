import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import ReactDOM from 'react-dom';
import { customHistory } from './RouteConfig';

import Home from '../ui/Home';
import NotFound from '../ui/NotFound';


import { Layout } from '../ui/layout/Layout';
import './AxiosConfig';
import EdaDftGamessGenerator from '../ui/Eda/Dft/Gamess/EdaDftGamessGenerator';
import EdaMp2GamessGenerator from '../ui/Eda/Mp2/Gamess/EdaMp2GamessGenerator';

const newTheme = createMuiTheme();
global.muiTheme = newTheme;

const renderLayout = Componente => (props) => {
  const elemento = (<Componente params={props.match.params} {...props} />);
  return (
    <Layout {...props}>
      {elemento}
    </Layout>
  );
};

const Routes = () => (
  <MuiThemeProvider theme={newTheme}>
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" render={renderLayout(Home)} />
        {/* <Route path="/search" render={renderLayout(Search)} /> */}

        <Route path="/edadftgamess" render={renderLayout(EdaDftGamessGenerator)} />{/* Rota para painel geral */}
        <Route path="/edamp2gamess" render={renderLayout(EdaMp2GamessGenerator)} />{/* Rota para painel geral */}
        <Route path="/dashboard" render={renderLayout(NotFound)} />{/* Rota para painel geral */}

        <Route render={renderLayout(NotFound)} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
