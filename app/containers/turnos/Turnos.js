// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Menu from '../../components/menu';

import styles from './styles.css';

export default class Turnos extends Component {
  static propTypes = {};

  static defaultProps = {};

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menuWrapper}>
            <Menu active={0} />
          </div>
          <div className={styles.titleWrapper}>
            <div>
              <span className={styles.title}>Turnos</span>
            </div>
            <div>
              <span className={styles.subtitle}>
                Consultá la agenda de turnos para presentar la carpeta de
                discapacidad
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
