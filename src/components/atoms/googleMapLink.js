import React from 'react'

const GoogleMapLink = ({geojson}) => {

  const mapLinkPath = "https://maps.google.com/?ll="

  const getMapLink = (input) => {
    // console.log('getGeoJSON, ', JSON.parse(input))
    const json = JSON.parse(input)
    // console.log('getGeoJSON, ', JSON.parse(input))
    const path = mapLinkPath + json.coordinates[1] + ',' + json.coordinates[0]
    return path
  }

  return (
    <a href={getMapLink(geojson)} target="_blank" rel="noopener noreferrer">(map)</a>
  )
}

export default GoogleMapLink
