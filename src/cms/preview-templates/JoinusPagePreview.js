import React from 'react'
import PropTypes from 'prop-types'
import { JoinPageTemplate } from '../../templates/joinus-page'

const JoinPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <JoinPageTemplate
        title={data.title}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

JoinPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default JoinPagePreview