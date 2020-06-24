import React from 'react';
import Title from './title';

const attributes = [
  `How to work with Javascript, Typescript HTML/CSS, C#, GO & NodeJs as industry experience.`,
  `How to handle Java & Objective-C for a mix-native project.`,
  `How to work with JS frameworks such as React, Angular and React-native.`,
  `How to manage both SQL and noSQL databases, mainly MSSQL & DynamoDB - respectively.`,
  `How to create and/or use APIs.`,
  `How to configure and use a feature/dev/master branch workflow in Git.`,
  `How to configure and use serverless services, such as AWS and Azure.`,
  `Currently studying to get the AWS Developer - Associate certification, so ask me anything serverless related.`,
];

const WhatIKnow = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mb-4'>
      <Title title='what do i know?' black />
      {attributes.map((attribute, idx) => (
        <span key={`${attribute}-${idx}`} className='text-base my-2 text-left'>
          {`> ${attribute}`}
        </span>
      ))}
    </div>
  );
};

export default WhatIKnow;
