import React, { useState, useEffect } from 'react';

interface HeaderProps {
  name: string;
}

const description = `Software Developer`;
const descLen = description.length;

const Header = (props: HeaderProps): JSX.Element => {
  const [desc, setDesc] = useState('');
  const [flicker, setFlickering] = useState(true);
  const { name } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setFlickering(!flicker);
    }, 750);
    return () => clearInterval(interval);
  }, [flicker, setFlickering]);

  useEffect(() => {
    const timeout = (j: number) => {
      setTimeout(() => {
        setDesc(description.slice(0, j));
        if (j < descLen) {
          timeout(++j);
        }
      }, 100);
    };
    setTimeout(() => {
      timeout(0);
    }, 2000);
  }, []);

  return (
    <div className='flex flex-col bg-black w-full h-48 justify-center items-center mb-6'>
      <span className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold'>
        {name}
      </span>
      <div className='flex'>
        <span className='text-white text-2xl sm:text-3xl lg:text-4xl mr-2'>{`$${desc}`}</span>
        <div
          className={`bg-white px-2 my-2 ${flicker ? 'invisible' : ''}`}></div>
      </div>
    </div>
  );
};

export default Header;
