import React from 'react';
import Project, { ProjectProps } from './project';
import Title from './title';
import tokyo2020 from '../assets/tokyo2020.png';
import emojis from '../assets/emojis.png';
import wvd from '../assets/wvd.png';
import personalizer from '../assets/personalizer.png';
import eod from '../assets/eod.png';

const attributes: ProjectProps[] = [
  {
    title: 'Azure Personalizer demo',
    description:
      'A demo application using Azure Personalizer to display content based on previous user interactions',
    techStack: [
      'React',
      'Typescript',
      'Azure Serverless',
      'UX Design',
      'Figma',
    ],
    img: personalizer,
    left: true,
    link: 'https://personalizer-webinar.azurewebsites.net/index.html',
  },
  {
    title: 'Emoji for your commits',
    description:
      'I made this single page application to standarize the use of emojis on your commits',
    techStack: ['React', 'Typescript', 'AWS Serverless'],
    img: emojis,
    left: false,
    link: 'https://gabriel1536.github.io/emojicommit/',
  },
  {
    title: 'Tokyo 2020 Olympics',
    description: 'Multimedia mobile app developed in React-Native',
    techStack: ['React-Native', 'Typescript', 'AWS Serverless', 'Jest/Enzyme'],
    img: tokyo2020,
    left: true,
  },
  {
    title: 'Windows Virtual Desktop',
    description:
      'WVD is an extension for the Azure portal in which I participated in the development along with my team',
    techStack: [
      'Typescript',
      'KnockoutJs',
      'Azure Serverless',
      'Selenium',
      '.NET 4.6.2',
    ],
    img: wvd,
    left: false,
    link: 'https://azure.microsoft.com/en-us/services/virtual-desktop/',
  },
  {
    title: 'End of Day mail generator',
    description:
      'Automated reporting tool to track daily and weekly backlogs and the work that has been done each day',
    techStack: ['Razor', 'Net Core', 'Azure Serverless'],
    img: eod,
    left: true,
  },
];

const WhatIveDone = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mb-4'>
      <Title title={`What I've worked on`} />
      {attributes.map((attribute: ProjectProps, idx: number) => (
        <span key={`${attribute}-${idx}`} className='text-lg my-4 text-center'>
          <Project {...attribute} />
          {idx < attributes.length - 1 && (
            <div className='mt-16 mb-10 border-t'></div>
          )}
        </span>
      ))}
    </div>
  );
};

export default WhatIveDone;
