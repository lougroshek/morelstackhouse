import React from 'react'
import moment from 'moment'
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap';
import AddToCalendar from 'react-add-to-calendar';

import GoogleMapComponent from "./../components/atoms/googleMapComponent"
import defaultImg from "./../images/placeholder.png"
import CoursesImage from "./../components/atoms/coursesImage"
import BioImage from "./../components/atoms/bioImage"
import Layout from './../components/layout'
import SEO from "../components/atoms/seo"

const EventTemplate = ({ data: course , location }) => {

  // Construct event strings for add-to-calendar button
  const event_start = `${course.markdownRemark.frontmatter.start_date}T${moment(course.markdownRemark.frontmatter.start_time, 'hh:mm a').format( "HH:mm:ss")}${course.markdownRemark.frontmatter.time_zone}`;
  const event_end = `${course.markdownRemark.frontmatter.end_date}T${moment(course.markdownRemark.frontmatter.end_time, 'hh:mm a').format( "HH:mm:ss")}${course.markdownRemark.frontmatter.time_zone}`;
  // Construct event object for add-to-calendar button
  const event = {
    title: course.markdownRemark.frontmatter.title,
    description: course.markdownRemark.frontmatter.excerpt,
    location:
      `${course.markdownRemark.frontmatter.location_title}, ${course.markdownRemark.frontmatter.street_address},
      ${course.markdownRemark.frontmatter.city},
      ${course.markdownRemark.frontmatter.state}
      ${course.markdownRemark.frontmatter.zip}`,
    startTime: event_start,
    endTime: event_end
  };

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

  const pageImages = course.allImageSharp.edges.filter(({node}) => {
    // If source contains the name in the markdown front matter, send back grayscale src
    if (node.resize.src.indexOf(course.markdownRemark.frontmatter.event_image) >= 0) {
      return true;
    } else {
      return false;
    }
  })

  const pageMeta = {
    title: course.markdownRemark.frontmatter.title,
    type: 'course',
    location: location,
    description: course.markdownRemark.frontmatter.excerpt,
    keywords: `ortho-bionomy, orthbionomy, bodywork, body work, massage, spine, back, gentle, healing, instruction, course, morel, stackhouse`,
    image: pageImages[0].node.resize.src,
    url: `${location.href}`
  }

  const grayscale = () => {
    // console.log('grayscale');
    const now = moment();
    const eventDate = moment(course.markdownRemark.frontmatter.start_date);
    if (now.diff(eventDate) > 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <Layout location={ pageMeta.location } pageType={ pageMeta.type }>
      <SEO meta={{ ...pageMeta }} />
        <Row className="heading">
          <Col
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 10, offset: 1 }}
            >
            <h1>{course.markdownRemark.frontmatter.title}</h1>
            <h2>{formatDate(course.markdownRemark.frontmatter.start_date, course.markdownRemark.frontmatter.end_date, course.markdownRemark.frontmatter.start_time, course.markdownRemark.frontmatter.end_time)}</h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: 12, offset: 0, order: 1 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 6, offset: 3 }}
            className={`event-img ${!!grayscale() ? `grayscale` : null}`}>
            <CoursesImage
              alt={`Event image for ${course.markdownRemark.frontmatter.title}, ${course.markdownRemark.frontmatter.start_date}`}
              filename={course.markdownRemark.frontmatter.event_image ? course.markdownRemark.frontmatter.event_image : defaultImg}
             />
          </Col>
          <Col
            xs={{ size: 12, offset: 0, order: 3 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 6, offset: 1, order: 2 }}
            className="event-desc">
            <div className="event-markdown" dangerouslySetInnerHTML={{ __html: course.markdownRemark.html }}></div>
              {(course.markdownRemark.frontmatter.instructor && course.markdownRemark.frontmatter.instructor_bio) ?
                <>
                <h4 className="instructor">About Instructor {course.markdownRemark.frontmatter.instructor}</h4>
                {course.markdownRemark.frontmatter.instructor_image ? 
                  <div className="instructor-img-parent">
                    <BioImage
                      className="instructor-img"
                      alt={`Bio image for ${course.markdownRemark.frontmatter.instructor}`}
                      filename={course.markdownRemark.frontmatter.instructor_image}
                     />
                   </div>
                 : null}
                <div dangerouslySetInnerHTML={{ __html: course.markdownRemark.frontmatter.instructor_bio }}></div>
                </>
                : null
              }
              { !!course.markdownRemark.frontmatter.testimonials ?
                <h4 className="testimonials-heading">What Others have Said About This Work</h4> : null }
              { !!course.markdownRemark.frontmatter.testimonials ? course.markdownRemark.frontmatter.testimonials.map((data, index) => {
                  return (
                    <div className="testimonial" key={`course_testimonial_${index}`}>
                      <div className="testimonial-text">
                        <p>{data}</p>
                      </div>
                    </div>
                  )
                }) : null
              }
          </Col>
          <Col 
            xs={{ size: 12, offset: 0, order: 2 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 4, offset: 0, order: 3 }}
            className="event-details">
              <h4>Getting There</h4>
              <span className="event-date-range">{formatDate(course.markdownRemark.frontmatter.start_date, course.markdownRemark.frontmatter.end_date)}</span>
              <span className="event-date-time">{formatTimeDuration(course.markdownRemark.frontmatter.start_date, course.markdownRemark.frontmatter.end_date, course.markdownRemark.frontmatter.start_time, course.markdownRemark.frontmatter.end_time)}</span>
              <AddToCalendar event={event} className="btn btn-primary" />
              <span className="event-location-details">
                {course.markdownRemark.frontmatter.location_title}
              </span>
              <span className="event-street-address">
                {course.markdownRemark.frontmatter.street_address}
              </span>
              <span className="event-city">{formatLocation(course.markdownRemark.frontmatter.city, course.markdownRemark.frontmatter.state)}
              {course.markdownRemark.frontmatter.zip}</span>
              <GoogleMapComponent input={course.markdownRemark.frontmatter.geojson} />
          </Col>
        </Row>
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
        end_date
        end_time
        time_zone
        event_image
        excerpt
        geojson
        instructor
        instructor_bio
        instructor_image
        testimonials
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
    allImageSharp {
      edges {
        node {
          resize(grayscale: true, width: 1200) {
            src
          }
        }
      }
    }
  }
`;

export default EventTemplate
