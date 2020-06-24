import React, { useState, useEffect } from 'react';

export interface ProjectProps {
  img: string;
  title: string;
  description: string;
  techStack: string[];
  left: boolean;
  link?: string;
}

const Project = (props: ProjectProps): JSX.Element => {
  const [isMobile, setMobile] = useState(false);
  const { innerWidth } = window;
  const { img, title, description, techStack, left, link } = props;

  useEffect(() => {
    if (innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [innerWidth]);

  return (
    <div className='flex flex-col md:flex-row w-full'>
      {!isMobile && !left && (
        <div className='flex my-auto mt-4'>
          <img src={img} alt='' className='yeet rounded' />
        </div>
      )}
      <div className='flex flex-col border mx-2 rounded'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={`flex justify-center mt-4 font-bold text-xl ${
            link ? 'text-indigo-500' : ''
          }`}>
          {title}
        </a>
        <span className='flex justify-center mt-4 p-2 text-base'>
          {description}
        </span>
        <div className='flex flex-wrap justify-center mt-4'>
          {techStack.map((tech, idx) => (
            <span
              className='border rounded p-1 m-1 bg-indigo-100 font-bold text-base'
              key={`${tech}-${idx}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      {(left || isMobile) && (
        <div className='flex my-auto mt-4'>
          <img src={img} alt='' className='yeet rounded' />
        </div>
      )}
    </div>
  );
};

export default Project;
