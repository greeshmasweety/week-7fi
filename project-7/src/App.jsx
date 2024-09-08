// src/App.js
import React, { useState } from 'react';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import EnrollForm from './components/EnrollForm';
import './App.css';

const initialCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch.',
    imageUrl: '/images/react.jpg',
    isPopular: true
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript.',
    imageUrl: '/images/js.jpg',
    isPopular: false
  }
];

function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (name) => {
    console.log(`${name} enrolled in ${selectedCourse.title}`);
  };

  return (
    <div className="App">
      <CourseList courses={courses} />
      {selectedCourse && (
        <>
          <CourseDetail course={selectedCourse} />
          <EnrollForm onEnroll={handleEnroll} />
        </>
      )}
    </div>
  );
}

export default App;
