import React, { Component } from 'react';
import { Layout } from './layout/Layout';

class NotFound extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div>
          Elemento não encontrado
      </div>
      </Layout>
    );
  }
}

export default NotFound;
