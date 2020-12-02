import React from 'react';
import Title from './title';

const attributes = [
  `How to work with React and React-native, in a fashionable way.`,
  `How to handle Java & Objective-C for a mix-native project.`,
  `How to handle any kind of pipeline. You name it. You need a completely automated CI/CD pipeline? Of any kind? Even though this is impossible? Yes, I can. I'm your guy.`,
  `How to work with Javascript, Typescript HTML/CSS, C#, GO & NodeJs as industry experience.`,
  `How to manage both SQL and noSQL databases, mainly MSSQL & DynamoDB - respectively.`,
  `How to create and maintain APIs, using just the right amount of .`,
  `How to manage Git as an expert.`,
  `How to configure and use serverless services: AWS, Azure and Google. The trifecta.`,
  `I'm an AWS Developer - Associate certification, so ask me anything serverless related.`,
];

const WhatIKnow = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mb-4'>
      <Title title='what do i know?' black />
      {attributes.map((attribute, idx) => (
        <span key={`${attribute}-${idx}`} className='text-base my-2 text-left'>
          {`· ${attribute}`}
        </span>
      ))}
    </div>
  );
};

export default WhatIKnow;
