import React from "react"
import moment from 'moment'

import GoogleMapComponent from "./../atoms/googleMapComponent"
import defaultImg from "./../../images/placeholder.png"
import CoursesImage from "./../atoms/coursesImage"
import "./coursesListBlock.scss"

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

  return (
    <div className="course-event" key={`course_event_${node.id}`}>
      <CoursesImage
        alt={`Event image for ${node.frontmatter.title}, ${node.frontmatter.start_date}`}
        filename={node.frontmatter.event_image ? node.frontmatter.event_image : defaultImg}
       />
      <h4 className="event-title">{node.frontmatter.title}</h4>
      <span className="event-location">{formatLocation(node.frontmatter.city, node.frontmatter.state)}</span>
      <span className="event-date-range">{formatDate(node.frontmatter.start_date, node.frontmatter.end_date, node.frontmatter.start_time, node.frontmatter.end_time)}</span>
      <div className="event-excerpt">{node.frontmatter.excerpt}</div>
      <GoogleMapComponent input={node.frontmatter.geojson} />
    </div>
  )
}

export default CoursesListBlock
