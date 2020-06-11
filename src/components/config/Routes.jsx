import React,  { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import ReactDOM from 'react-dom';
import { customHistory } from './RouteConfig';

import Home from '../ui/Home';
import NotFound from '../ui/NotFound';


// import './AxiosConfig';
const EdaDftGamessGenerator =  lazy(() => import('../ui/Eda/Dft/Gamess/EdaDftGamessGenerator'));
const EdaMp2GamessGenerator =  lazy(() => import('../ui/Eda/Mp2/Gamess/EdaMp2GamessGenerator'));
const CustomDftGenerator=  lazy(() => import('../ui/Eda/Dft/Custom/CustomDftGenerator'));

const newTheme = createMuiTheme();

const Routes = () => (
  <MuiThemeProvider theme={newTheme}>
    <Router history={customHistory}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/search" render={renderLayout(Search)} /> */}

          <Route path="/edadftgamess" component={EdaDftGamessGenerator} />{/* Rota para painel geral */}
          <Route path="/edamp2gamess" component={EdaMp2GamessGenerator} />{/* Rota para painel geral */}
          <Route path="/customgenerator" component={CustomDftGenerator} />
          <Route path="/dashboard" component={NotFound} />{/* Rota para painel geral */}

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
    
  </MuiThemeProvider>
);

export default Routes;
