import React from 'react'
import PropTypes from 'prop-types'
import { PeoplePageTemplate } from '../../templates/people-page'

const PeoplePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PeoplePageTemplate
        image1={getAsset(data.image1)}
        image2={getAsset(data.image2)}
        altImage1={data.altImage1}
        altImage2={data.altImage2}
        title={data.title}
        subheading={data.subheading}
        subheading2={data.subheading2}
        intro={data.intro || { blurbs: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PeoplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PeoplePagePreview