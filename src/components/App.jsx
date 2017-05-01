import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header/Header.jsx';
import ImageList from './imageList/imageList.jsx';
import style from '../styles/Main.scss'; //eslint-disable-no-used-vars

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <ImageList />
            </Col>
          </Row>
      </Grid>
      </section>
    );
  }
}

export default App;
