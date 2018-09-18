// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../Routes';
import Login from './login';
import Home from './home';
import Header from '../components/header';
import LoginActions from '../actions/login-actions';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    props.store.subscribe(() => {
      this.setState({ isLoggedIn: props.store.getState().login.isLoggedIn });
    });
  }

  handleLogout = () => {
    this.props.store.dispatch(LoginActions.logout());
    // Clear history
    this.props.history.push('/home');
  };

  render() {
    const { store, history } = this.props;
    const { isLoggedIn } = this.state; // store.getState().login;

    return (
      <Provider store={store}>
        <div>
          {!isLoggedIn ? (
            <Login />
          ) : (
            <ConnectedRouter history={history}>
              <div>
                <Header logout={this.handleLogout} />
                <div className="contentWrapper">
                  <Routes />
                </div>
              </div>
            </ConnectedRouter>
          )}

          <div className="footer">
            <span>© 2018 ASE NacionaL. Todos los derechos reservados.</span>
          </div>
        </div>
      </Provider>
    );
  }
}
