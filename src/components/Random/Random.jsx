import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from 'react-image';
import PropTypes from 'prop-types';
import * as actions from '../../actions/photos';
import Header from '../Header/Header.jsx';
import Spinner from '../Common/Spinner/Spinner';

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
          <Image src={this.props.random ? this.props.random[0].data.urls.regular : ''} loader={<Spinner />} />
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

Random.propTypes = {
  actions: PropTypes.object,
  random: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
