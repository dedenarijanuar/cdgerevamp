import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
//add stimulus for carousel images
import { Application } from "stimulus"
import Carousel from "stimulus-carousel"

const FeatureGrid = ({ gridItems }) => (
  <div
        data-controller="carousel"
        className="swiper-container"
        data-carousel-options-value='{"loop": true, "navigation": { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }}'
      >
    <div className="swiper-wrapper">
      {gridItems.map((item) => (
        <div key={item.text} className="swiper-slide">
          <div className="h-64 flex justify-center items-center">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
      ))}
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
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


const application = Application.start()
application.register("carousel", Carousel)

export default FeatureGrid
