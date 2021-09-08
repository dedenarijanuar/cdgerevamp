import React from 'react'

import Layout from '../../components/layout'
import ProductRoll from '../../components/ProductRoll'

export default class ProductIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProductRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
