// src/components/CourseDetail.js
import React from 'react';
import PropTypes from 'prop-types';

const CourseDetail = ({ course }) => {
  const style = {
    backgroundColor: course.isPopular ? 'yellow' : 'white'
  };

  return (
    <div style={style}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <img src={course.imageUrl} alt={course.title} />
    </div>
  );
};

CourseDetail.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isPopular: PropTypes.bool
  }).isRequired
};

export default CourseDetail;
