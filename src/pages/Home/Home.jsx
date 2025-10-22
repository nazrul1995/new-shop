import React from 'react';
import bannerImg from '../../assets/images/BannerImg.png'
import LeftAside from './LeftAside';
const Home = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-12 gap-2 mt-5'>
          <LeftAside></LeftAside>
          <div className='col-span-9'>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
