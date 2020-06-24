import React from 'react';

interface TitleProps {
  title: string;
  black?: boolean;
}

const Title = (props: TitleProps): JSX.Element => {
  const { title, black } = props;
  const bgBlack = black ? 'bg-black text-white' : '';
  return (
    <span
      className={`flex font-bold text-xl uppercase mb-4 justify-center border-8 border-black p-2 ${bgBlack}`}>
      {title}
    </span>
  );
};

export default Title;
