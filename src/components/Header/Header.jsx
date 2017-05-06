import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './Header.scss';
import * as actions from '../../actions/photos';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._search = this._search.bind(this);
  }

  _handleChange(event) {
    this.setState({
      term: event.target.value
    });
    if(event.which == 13) {
      this.props.actions.search(this.state.term);
    }
  }

  _search(event) {
    event.preventDefault();
    this.props.actions.search(this.state.term);
  }
  render() {
    return (
      <Grid styleName="header" fluid={true}>
        <Col xs={12} md={12} lg={3} styleName="searchBar">
          <FontAwesome styleName="header__icon" size="2x" name="camera"/>
            <div styleName="header__search">
                <input className="form-control" value={this.state.term}
                placeholder="search"
                onKeyDown={this._handleChange}
                onChange={this._handleChange}/>
            </div>
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


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(Header, styles))
