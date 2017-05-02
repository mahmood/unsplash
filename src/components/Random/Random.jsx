import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/photos.js';
import Header from '../Header/Header.jsx';

class Random extends Component {
  componentDidMount() {
    this.props.actions.getRandom();
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          {this.props.random ? '‌' : 'Loading'}
          <img src={this.props.random ? this.props.random[0].data.urls.regular : ''} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    random: state.home.random
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Random);
