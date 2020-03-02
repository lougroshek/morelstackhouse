import React from "react"
import moment from 'moment'
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap';

import defaultImg from "./../../../images/placeholder.png"
import CoursesImage from "./../../atoms/coursesImage"
import GoogleMapLink from "./../../atoms/googleMapLink"

const CoursesListBlock = ({node}) => {

  const formatLocation = (city, state) => {
    if (city.length >= 1 && state.length >= 1) {
      return `${city}, ${state}`
    } else if (city.length >= 1 && state.length < 1) {
      return `${city}`
    } else if (city.length < 1 && state.length >= 1) {
      return `${state}`
    } else {
      return ``
    }
  }

  const formatDate = (startDate, endDate) => {
    // console.log('formatDate()')
    const start = moment(startDate, "YYYY-MM-DD");
    const end = moment(endDate, "YYYY-MM-DD");
    if (start.isValid()) {
      // console.log('start is valid')
      if (end.isValid()) {
        // console.log('end is valid')
        if (startDate === endDate) {
          return `${start.format('dddd, MMMM Do, YYYY')}`
        } else {
          return `${start.format('dddd, MMMM Do')} - ${end.format('dddd, MMMM Do, YYYY')}`
        }
      } else {
        return `${start.format('dddd, MMMM Do, YYYY')}`
      }
    } else {
      return false;
    }
  }

  const formatTimeDuration = (startDate, endDate, startTime, endTime) => {
    const start = moment(startTime, "h:mm a");
    const end = moment(endTime, "h:mm a");
    if (start.isValid()) {
      if (end.isValid()) {
        if (startDate !== endDate) {
           return `${start.format('h:mm a')} - ${end.format('h:mm a')} daily`
        } else {
          return `${start.format('h:mm a')} - ${end.format('h:mm a')}`
        }
      } else {
        return `${start.format('h:mm a')}`
      }
    } else {
      return `Time format not valid. Contact the site administrator.`
    }
  }

  return (
    <Row className="course-event" key={`course_event_${node.id}`}>
      <Col
        xs={{ size: 12, offset: 0 }}
        sm={{ size: 10, offset: 1 }}
        md={{ size: 5, offset: 1 }}
        className="event-image">
        <CoursesImage
          alt={`Event image for ${node.frontmatter.title}, ${node.frontmatter.start_date}`}
          filename={node.frontmatter.event_image ? node.frontmatter.event_image : defaultImg}
         />
      </Col>
      <Col
        xs={{ size: 12, offset: 0 }}
        sm={{ size: 10, offset: 1 }}
        md={{ size: 5, offset: 0 }}
        className="event-details">
        <h4 className="event-title">
          <Link to={`/events/${node.fields.slug}`}>{node.frontmatter.title}</Link>
        </h4>
        <h5 className="event-location">{formatLocation(node.frontmatter.city, node.frontmatter.state)}</h5>
        <span className="event-date-range">{formatDate(node.frontmatter.start_date, node.frontmatter.end_date)}</span>
        <span className="event-date-range">{formatTimeDuration(node.frontmatter.start_date, node.frontmatter.end_date, node.frontmatter.start_time, node.frontmatter.end_time)}</span>
        <span className="event-location-details">
          {node.frontmatter.location_title}&nbsp;
          <GoogleMapLink geojson={node.frontmatter.geojson} />
        </span>
        <div className="event-excerpt">{node.frontmatter.excerpt}</div>
        <Link to={`/events/${node.fields.slug}`} className="btn btn-primary">REGISTRATION</Link>
      </Col>
    </Row>
  )
}

export default CoursesListBlock
