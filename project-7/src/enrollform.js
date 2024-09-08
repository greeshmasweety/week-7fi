// src/components/EnrollForm.js
import React, { useState } from 'react';
import styles from './EnrollForm.module.css';

const EnrollForm = ({ onEnroll }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Enroll</button>
    </form>
  );
};

export default EnrollForm;
