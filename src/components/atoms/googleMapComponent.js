import React from "react"
import GoogleMap, { Marker } from 'react-maps-google'
/* globals GOOGLE_MAPS_API_KEY */

import "./googleMapComponent.scss"

const GoogleMapComponent = ({input}) => {

  const getGeoJSON = (input) => {
    // console.log('getGeoJSON, ', JSON.parse(input))
    const json = JSON.parse(input)
    const position = {
      lat: json.coordinates[1],
      lng: json.coordinates[0]
    }
    console.log(position)
    return position
  }

  const getMapOptions = (input) => {
    // const json = JSON.parse(input)
    const options = {
      center: getGeoJSON(input),
      zoom: 14
    }
    return options
  }

  return (
    <GoogleMap className="event-google-map" apiKey={GOOGLE_MAPS_API_KEY}
      options={getMapOptions(input)}>
      <Marker position={getGeoJSON(input)} />
    </GoogleMap>
  )

}

export default GoogleMapComponent
