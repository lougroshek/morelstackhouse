import React from 'react'
import moment from 'moment'
import { graphql } from "gatsby"

import GoogleMapComponent from "./../components/atoms/googleMapComponent"
import defaultImg from "./../images/placeholder.png"
import CoursesImage from "./../components/atoms/coursesImage"
import Layout from './../components/layout'
import SEO from "../components/seo"

import "./eventTemplate.scss"

const EventTemplate = ({ data: course , location }) => {

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
    <Layout location={location} pageType="course">
      <SEO title={course.markdownRemark.frontmatter.title} />
      <div className="course-event" key={`course_event_${course.id}`}>
        <CoursesImage
          alt={`Event image for ${course.markdownRemark.frontmatter.title}, ${course.markdownRemark.frontmatter.start_date}`}
          filename={course.markdownRemark.frontmatter.event_image ? course.markdownRemark.frontmatter.event_image : defaultImg}
         />
        <h4 className="event-title">{course.markdownRemark.frontmatter.title}</h4>
        <h5 className="event-location">{formatLocation(course.markdownRemark.frontmatter.city, course.markdownRemark.frontmatter.state)}</h5>
        <span className="event-date-range">{formatDate(course.markdownRemark.frontmatter.start_date, course.markdownRemark.frontmatter.end_date, course.markdownRemark.frontmatter.start_time, course.markdownRemark.frontmatter.end_time)}</span>
        <GoogleMapComponent input={course.markdownRemark.frontmatter.geojson} />
        <div className="event-desc" dangerouslySetInnerHTML={{ __html: course.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export const course = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      city
      contact_email
      contact_name
      contact_phone
      end_date
      end_time
      event_image
      excerpt
      geojson
      instructor
      instructor_bio
      instructor_image
      location_title
      start_date
      start_time
      state
      street_address
      tag
      title
      type
      zip
    }
  }
}`;

export default EventTemplate
