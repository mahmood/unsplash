import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/photos';
import PropTypes from 'prop-types';
import styles from './imageList.scss';

import ImageItem from './imageItem.jsx';

export class ImageList extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);

    this.state = {
      pageId: 1
    };
  }
  componentWillMount() {
    this.props.actions.fetchPhoto(this.state.pageId);
  }

  _handleClick() {
    let pageid = this.state.pageId++;
    this.setState({ pageid });
    this.props.actions.loadMore(this.state.pageId);
  }

  _renderError(){
    if(this.props.isLoading) {
      return <div className="error">Loading</div>;
    }
    if(this.props.error) {
      return <div className="error">Error: {this.props.error}</div>;
    }
  }

  render() {
    return (
      <div>
        <Grid>
          {this.props.photo ? this.props.photo.map(item => {
            return <ImageItem key={item.id} item={item} />;
          }) : ''}

          {this._renderError()}
        </Grid>
        <div styleName="loadMore">
            <Button bsSize="large" bsStyle="primary" onClick={this._handleClick}>Load More</Button>
        </div>
      </div>
    );
  }
}

ImageList.PropTypes = {

};

const mapStateToProps = (state) => {
  return {
    photo: state.home.photos,
    isLoading: state.home.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(ImageList, styles));
