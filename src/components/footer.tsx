import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full mt-4 py-4 border-t items-center'>
      <span className='text-xs'>Thanks for reading!</span>
      <a
        className={`font-bold text-xs uppercase text-rojito mt-2`}
        href='https://github.com/gantelo/about-me'
        target='_blank'
        rel='noopener noreferrer'>
        View the source code
      </a>
    </div>
  );
};

export default Footer;
