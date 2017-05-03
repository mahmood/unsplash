import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div styleName="spinner"/>
    );
  }
}

export default CSSModules(Spinner, styles);
