// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './styles.css';

export default class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  // constructor(props) {
  //   super(props);
  // }

  renderMenuButton = (title, route, icon, borderStyle) => {
    return (
      <Link to={route} className={[`${styles.menuButton} ${borderStyle}`]}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={icon} />
        </div>
        <div>
          <span className={styles.menuButtonTitle}>{title}</span>
        </div>
      </Link>
    );
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>
              Toda la información de ASE en un solo lugar
            </span>
          </div>
          <div className={styles.menuButtonsWrapper}>
            <div className={styles.row}>
              {this.renderMenuButton(
                'Turnos',
                '/turnos',
                './static/images/turnos-icon.png',
                styles.borderA
              )}
              {this.renderMenuButton(
                'Reintegros',
                '/reintegros',
                './static/images/reintegros-icon.png',
                styles.borderA
              )}
              {this.renderMenuButton(
                'Medicamentos',
                '/medicamentos',
                './static/images/medicamentos-icon.png',
                styles.borderB
              )}
            </div>
            <div className={styles.row}>
              {this.renderMenuButton(
                'Discapacidad',
                '/discapacidad',
                './static/images/discapacidad-icon.png',
                styles.borderC
              )}
              {this.renderMenuButton(
                'Mis aportes',
                '/aportes',
                './static/images/mis-aportes-icon.png',
                styles.borderC
              )}
              {this.renderMenuButton(
                'Beneficios',
                '/beneficios',
                './static/images/beneficios-icon.png'
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
