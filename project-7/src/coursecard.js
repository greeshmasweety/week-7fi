// src/components/CourseCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  return (
    <div className={styles.card}>
      <img src={course.imageUrl} alt={course.title} className={styles.image} />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }).isRequired
};

export default CourseCard;
