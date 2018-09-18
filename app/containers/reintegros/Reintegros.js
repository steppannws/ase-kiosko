// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Menu from '../../components/menu';

import styles from './styles.css';

export default class Reintegros extends Component {
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
            <Menu active={1} />
          </div>
          <div className={styles.titleWrapper}>
            <div>
              <span className={styles.title}>Reintegros</span>
            </div>
            <div>
              <span className={styles.subtitle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
