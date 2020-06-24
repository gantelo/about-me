import React from 'react';
import Header from './components/header';
import WhatIDo from './components/what-i-do';
import WhatIKnow from './components/what-i-know';
import WhatIveDone from './components/what-have-i-done';
import Misc from './components/misc';
import Footer from './components/footer';
import './styles.scss';

const Main = (): JSX.Element => {
  return (
    <div className='flex flex-col px-10 mx-auto items-center container-custom mt-4'>
      <Header name='Gabriel Antelo' />
      <WhatIDo />
      <WhatIKnow />
      <WhatIveDone />
      <Misc />
      <Footer />
    </div>
  );
};

export default Main;
