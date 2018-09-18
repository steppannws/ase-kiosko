/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Home from './containers/home';
import Turnos from './containers/turnos';
import Reintegros from './containers/reintegros';
import Medicamentos from './containers/medicamentos';
import Discapacidad from './containers/discapacidad';
import Aportes from './containers/aportes';
import Beneficios from './containers/beneficios';

export default () => (
  <App>
    <Switch>
      <Route path={routes.BENEFICIOS} component={Beneficios} />
      <Route path={routes.APORTES} component={Aportes} />
      <Route path={routes.DISCAPACIDAD} component={Discapacidad} />
      <Route path={routes.MEDICAMENTOS} component={Medicamentos} />
      <Route path={routes.REINTEGROS} component={Reintegros} />
      <Route path={routes.TURNOS} component={Turnos} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </App>
);
