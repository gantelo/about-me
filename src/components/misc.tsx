import React from 'react';

interface MiscProps {
  title: string;
  link?: string;
  description: JSX.Element;
}

const attributes: MiscProps[] = [
  {
    title: 'What is southworks?',
    description: (
      <span className='flex text-center text-base px-10'>
        {`I've been employed since April 2019. My responsibilities varies between
        projects. I've been a React dev, a React-native dev, a .NET dev, a
        KnockoutJs dev. Got my hands dirty using serverless services, mainly
        Azure and AWS.`}
      </span>
    ),
    link: 'https://www.southworks.com/',
  },
  {
    title: 'Do i have a GitHub?',
    description: (
      <div className='flex flex-col text-xs'>
        <span>I have two</span>
        <div className='flex flex-row justify-center'>
          <a
            className={`font-bold text-base uppercase text-blue-600 m-2 py-1 px-2 border rounded hover:bg-blue-100`}
            href='https://github.com/gabriel1536'
            target='_blank'
            rel='noopener noreferrer'>
            Personal
          </a>
          <a
            className={`font-bold text-base uppercase text-blue-600 m-2 py-1 px-2 border rounded hover:bg-blue-100`}
            href='https://github.com/gantelo'
            target='_blank'
            rel='noopener noreferrer'>
            Work
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Do i have a pdf resume?',
    description: (
      <div className='flex flex-col text-xs items-center'>
        <a
          className={`font-bold text-base uppercase text-white bg-blue-600 m-2 py-1 px-2 border rounded hover:bg-white hover:text-blue-600`}
          href='https://gabriel1536.github.io/resume/'
          target='_blank'
          rel='noopener noreferrer'>
          yes
        </a>
      </div>
    ),
  },
  {
    title: 'What is my contact?',
    description: (
      <div className='flex flex-col text-xs items-center'>
        <a
          className={`font-bold text-base uppercase text-blue-600`}
          href='mailto:gabriel1536@gmailcom'
          target='_blank'
          rel='noopener noreferrer'>
          gabriel1536@gmailcom
        </a>
        <span className='mt-2 text-base'>(+54) 341-2293380</span>
      </div>
    ),
  },
];

const Misc = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mt-4 py-4 border-t'>
      {attributes.map((attribute: MiscProps, idx: number) => (
        <span
          key={`${attribute}-${idx}`}
          className='flex flex-col text-lg my-4 text-center'>
          <a
            className={`font-bold text-2xl uppercase ${
              attribute.link ? 'text-blue-600' : ''
            } mb-10`}
            href={attribute.link}
            target='_blank'
            rel='noopener noreferrer'>
            {attribute.title}
          </a>
          {attribute.description}
          {idx < attributes.length - 1 && (
            <div className='mt-4 mb-4 border-t'></div>
          )}
        </span>
      ))}
    </div>
  );
};

export default Misc;
