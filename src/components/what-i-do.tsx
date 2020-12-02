import React from 'react';
import Title from './title';

const attributes = [
  'Create fun projects in my spare time',
  'Write quality, functional code',
  'Keep my functions small, focused, and easy to understand',
  'Leave comments as I create and maintain code',
  "Keep track of every bug. Even though I don't make any",
  'Strictly follow security best practices',
  'Never stop learning',
];

const WhatIDo = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mb-4'>
      <Title title='What do I do?' />
      {attributes.map((attribute, idx) => (
        <span
          key={`${attribute}-${idx}`}
          className='text-base my-2 text-center'>
          {attribute}
        </span>
      ))}
    </div>
  );
};

export default WhatIDo;
