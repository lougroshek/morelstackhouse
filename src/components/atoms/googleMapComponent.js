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
      controlSize: 24,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    }
    return options
  }
  // <a target="_blank" href="https://icons8.com/icons/set/marker">Marker icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  const getMarkerOptions = () => {
    const options = {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABLElEQVRIia3Tzy5DQRTH8U/EguiGjWraeC28AxYWngAbD0DoA4i1itjZWKq9eAMS/1ISyqK3lM703qn7S87qnPn+fnMyQ76q2EYbz1m1sYX5AudHajkDfkbqCUvjwlfQHQHvV3cck2qWLg8+eJPguiYiBmuoJASqYDVh3rXhlCeoZ9UK9NspBqH11Af6jUD/MQSKreg9JU2mj5ThtuGELb3kDZwG+lcpBscBQF4dhUCxFZ2npMl0ljJcU+yTDX62WmqiywSDixgktiI4TAhzkDD7rRk8yE9/j+kYZNQNXtAsEGQfnUKRA6rjTTz9KxbGhffVHGGw9184LOqt4C+8o/erS9FuwGCnLDjM4s7vlzNXpgFsDhhslA2n99ZvcYOpoocmEww6WPfzPAvpC8riosVRWOJcAAAAAElFTkSuQmCC'
    }
    return options
  }

  return (
    <GoogleMap className="event-google-map" apiKey={process.env.GOOGLE_MAPS_API_KEY}
      options={getMapOptions(input)}>
      <Marker
        position={getGeoJSON(input)}
        animation="google.maps.Animation.DROP"
        options={getMarkerOptions()} />
    </GoogleMap>
  )

}

export default GoogleMapComponent
