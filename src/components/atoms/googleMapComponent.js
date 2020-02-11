import React from "react"
import GoogleMap, { Marker } from 'react-maps-google'

import "./googleMapComponent.scss"

const GoogleMapComponent = ({input}) => {

  const getGeoJSON = (input) => {
    // console.log('getGeoJSON, ', JSON.parse(input))
    const json = JSON.parse(input)
    const position = {
      lat: json.coordinates[1],
      lng: json.coordinates[0]
    }
    return position
  }

  const getMapOptions = (input) => {
    // const json = JSON.parse(input)
    const options = {
      center: getGeoJSON(input),
      zoom: 14,
      streetViewControl: false,
      // disableDefaultUI: true, // Good for mobile, maybe Morel's users don't want.
      mapTypeControl: false,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    }
    return options
  }

  return (
    <GoogleMap className="event-google-map" apiKey={process.env.GOOGLE_MAPS_API_KEY}
      options={getMapOptions(input)}>
      <Marker position={getGeoJSON(input)} animation="google.maps.Animation.DROP" />
    </GoogleMap>
  )

}

export default GoogleMapComponent
