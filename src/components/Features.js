import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Carousel from 'react-bootstrap/Carousel';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {/* {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <h3>{item.text}</h3>
          <div className="has-text-centered">
          <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
        </section>
      </div>
    ))} */}
    <Carousel className="full-width-md d-none d-md-block">
      {gridItems.map(item => 
      <Carousel.Item>
        <a href={item.text} target="_blank" rel="noreferrer">
          <PreviewCompatibleImage imageInfo={item} />
        </a>
      </Carousel.Item>
      )}
  </Carousel>
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
