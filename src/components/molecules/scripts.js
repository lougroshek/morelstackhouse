import React from "react"
/* globals GOOGLE_MAPS_API_KEY */

const Scripts = () => {
  const googleMapsURL = `https://>maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=googleMapsOnLoad`
  async componentDidMount() {
    
  }
  return (
    <>
      <script>
        var window.googleMapsOnLoad = function() {
          // console.log('googleMapsOnLoad()')
          // var google = window.google;
          // window.geocoder = new google.maps.Geocoder()
        }
      </script>
      <script src={googleMapsURL} async defer></script>
    </>
  )
}

export default Scripts
