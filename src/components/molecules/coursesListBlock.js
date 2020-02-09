import React from "react"
import moment from 'moment'
/* globals GOOGLE_MAPS_API_KEY */

import defaultImg from "./../../images/placeholder.png"
import CoursesImage from "./../atoms/coursesImage"

// const loadGoogleMapsApi = require('load-google-maps-api')


const CoursesListBlock = ({node}) => {

  const formatLocation = (city, state) => {
    if (city.length >= 1 && state.length >= 1) {
      return `in ${city}, ${state}`
    } else if (city.length >= 1 && state.length < 1) {
      return `in ${city}`
    } else if (city.length < 1 && state.length >= 1) {
      return `in ${state}`
    } else {
      return ``
    }
  }

  const formatDate = (startDate, endDate, startTime, endTime) => {
    // console.log('formatDate()')
    const start = moment(startDate + ' ' + startTime, "YYYY-MM-DD HH:mm a");
    const end = moment(endDate + ' ' + endTime, "YYYY-MM-DD HH:mm a");
    if (start.isValid()) {
      // console.log('start is valid')
      if (end.isValid()) {
        // console.log('end is valid')
        return `${start.format('LLLL')} - ${end.format('LLLL')}`
      } else {
        return `${start.format('LLLL')}`
      }
    } else {
      return false;
    }
  }

  let geocoder = null;
  // const getGeo = (address) => {
  //   console.log('getGeo, ', address)
  //   // const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status === 'OK') {
  //       console.log('OK: ', results)
  //       // map.setCenter(results[0].geometry.location);
  //       // var marker = new google.maps.Marker({
  //       //     map: map,
  //       //     position: results[0].geometry.location
  //       // });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }

  // loadGoogleMapsApi().then(function (googleMaps) {
  //   // new googleMaps.Map(document.querySelector('.map'), {
  //   //   center: {
  //   //     lat: 40.7484405,
  //   //     lng: -73.9944191
  //   //   },
  //   //   zoom: 12
  //   // })
  //   // new googleMaps.Map(document.querySelector('.map'), {
  //   //   center: {
  //   //     lat: 40.7484405,
  //   //     lng: -73.9944191
  //   //   },
  //   //   zoom: 12
  //   // })
  //   // geocoder = new googleMaps.maps.Geocoder();
  // })
  
  window.googleMapsOnLoad = () => {
    console.log('googleMapsOnLoad()')
  }
  const google = window.google;
  console.log(google);
  const googleMapsURL = `https://>maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=googleMapsOnLoad`

  return (
    <div className="course-event" key={node.id}>
      <CoursesImage
        alt={`Event image for ${node.frontmatter.title}, ${node.frontmatter.start_date}`}
        filename={node.frontmatter.event_image ? node.frontmatter.event_image : defaultImg}
       />
      <h4>{node.frontmatter.title}</h4>
      <p>{formatLocation(node.frontmatter.city, node.frontmatter.state)}</p>
      <p>{formatDate(node.frontmatter.start_date, node.frontmatter.end_date, node.frontmatter.start_time, node.frontmatter.end_time)}</p>
      <div className="excerpt">{node.excerpt}</div>
      <div className="testing-geo">{
        geocoder
      }</div>
      <script src={googleMapsURL} async defer></script>
    </div>
  )
}

export default CoursesListBlock
