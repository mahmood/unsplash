import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {Grid, Col, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';
import styles from './Header.scss';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  render() {
    return (
      <Grid styleName="header" fluid={true}>
        <Col xs={12} md={12} lg={3}>
          <FontAwesome styleName="header__icon" size="2x" name="camera"/>
          <form>
            <FormGroup styleName="header__search">
              <FormControl
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={this.handleChange.bind(this)}/>
            </FormGroup>
          </form>
        </Col>

        <nav styleName="header__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="random">Random</Link>
            </li>
          </ul>
        </nav>

      </Grid>
    );
  }
}

export default CSSModules(Header, styles);
