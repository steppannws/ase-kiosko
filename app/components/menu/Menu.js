import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';
// import { colors } from '../../theme';

/**
 * Description
 * @author ?
 * @class Menu
 */
export default class Menu extends Component {
  /**
   * Definition of the prop types
   */
  static propTypes = {
    active: PropTypes.number
  };

  /**
   * Default Props
   */
  static defaultProps = {
    active: 0
  };

  constructor(props) {
    super(props);

    this.menu = [
      { image: './static/images/turnos-icon.png', route: '/turnos' },
      { image: './static/images/reintegros-icon.png', route: '/reintegros' },
      {
        image: './static/images/medicamentos-icon.png',
        route: '/medicamentos'
      },
      {
        image: './static/images/discapacidad-icon.png',
        route: '/discapacidad'
      },
      { image: './static/images/mis-aportes-icon.png', route: '/aportes' },
      { image: './static/images/beneficios-icon.png', route: '/beneficios' }
    ];
  }

  renderButton = (item, index) => {
    return (
      <Link key={`${index}`} to={item.route}>
        <div
          className={[
            `${styles.buttonWrapper} ${index !== this.menu.length - 1 &&
              styles.bottomBorder} ${this.props.active === index &&
              styles.activeButton}`
          ]}
        >
          <img className={styles.icon} src={item.image} />
        </div>
      </Link>
    );
  };

  render() {
    return (
      <div className={styles.container}>{this.menu.map(this.renderButton)}</div>
    );
  }
}
