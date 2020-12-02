import React from 'react';
import Project, { ProjectProps } from './project';
import Title from './title';
import tokyo2020 from '../assets/tokyo2020.png';
import emojis from '../assets/emojis.png';
import wvd from '../assets/wvd.png';
import personalizer from '../assets/personalizer.png';
import eod from '../assets/eod.png';
import diversion from '../assets/diversion.jpg';

const attributes: ProjectProps[] = [
  {
    title: 'FCA Analytics Apps - 2020',
    description:
      'Application for workers and managers to facilitate construction entry and accesses.',
    techStack: ['React-Native', 'Typescript', 'Azure Serverless', 'CircleCI'],
    img: diversion,
    left: false,
  },
  {
    title: 'Azure Personalizer demo - 2020',
    description:
      'A demo application using Azure Personalizer to display content based on previous user interactions',
    techStack: ['React', 'Typescript', 'Azure Serverless'],
    img: personalizer,
    left: true,
    link: 'https://personalizer-webinar.azurewebsites.net/index.html',
  },
  {
    title: 'Emoji for your commits - 2019',
    description:
      'I made this single page application to standarize the use of emojis on your commits',
    techStack: ['React', 'Typescript', 'AWS Serverless'],
    img: emojis,
    left: false,
    link: 'https://gantelo.github.io/emojicommit/',
  },
  {
    title: 'Tokyo 2020 Olympics - 2019',
    description: 'Multimedia mobile app developed in React-Native',
    techStack: ['React-Native', 'Typescript', 'AWS Serverless', 'Jest/Enzyme'],
    img: tokyo2020,
    left: true,
  },
  {
    title: 'Windows Virtual Desktop - 2019',
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
    title: 'End of Day mail generator - 2018',
    description:
      'Automated reporting tool to track daily and weekly backlogs and the work that has been done each day',
    techStack: ['Razor', 'Net Core', 'Azure Serverless'],
    img: eod,
    left: true,
  },
  {
    title: 'Other Projects - 2016',
    description:
      'I was in charge of several projects, including leading a team and maintaining HUGE legacy code. Ask me about it!',
    techStack: ['C#', 'Net 2.0', 'Pure JS', 'jQuery', 'HTML'],
    img: emojis,
    left: false,
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
            <div className='mt-16 mb-10 border-t bg-2'></div>
          )}
        </span>
      ))}
    </div>
  );
};

export default WhatIveDone;
