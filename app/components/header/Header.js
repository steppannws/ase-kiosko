import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import MainButton from '../main-button';
// import { colors } from '../../theme';

/**
 * Description
 * @author ?
 * @class Header
 */
export default class Header extends Component {
  /**
   * Definition of the prop types
   */
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  /**
   * Default Props
   */
  static defaultProps = {};

  // constructor(props){
  //   super(props)
  // }

  render() {
    const { logout } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src="./static/images/logo.png" />
          </div>
          <div className={styles.rightContentWrapper}>
            <div>
              <span className={styles.greetingsText}>
                ¡Hola!{' '}
                <span className={styles.boldText}>Federico Buscaglia</span>
              </span>
            </div>
            <div className={styles.exitButtonWrapper}>
              <MainButton text="Salir" onPress={logout} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
