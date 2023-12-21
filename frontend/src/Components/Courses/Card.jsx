import React, { useState } from 'react';
import CourseModex from './CourseModex';
import { Section } from './Style';

const Card = ({
  curElem: { icon, title, label },
  ModelHandlerFunc,
  curElem,
}) => {
  return (
    <div style={{ padding: '1rem' }}>
      <Section>
        <div className='icon_container'>
          <i className={icon}></i>
        </div>
        <div className='title_container'>
          <h1>{title}</h1>
        </div>
        <div className='label_container'>
          <p>{label.slice(0, 60)}...</p>
        </div>
        <div className='button_container'>
          <button onClick={() => ModelHandlerFunc(curElem)}>Read More</button>
        </div>
      </Section>
    </div>
  );
};

export default Card;
