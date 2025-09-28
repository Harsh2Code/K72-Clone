import React from 'react'
import HomeHeroText from './HomeHeroText'
import HomeBottom from './HomeBottomText'
import Video from './Video'

const Home = () => {
  return (
    <div className='h-[88.3vh] w-screen relative overflow-hidden'>
        <Video />
        <div className="absolute z-10 h-full flex flex-col flex-shrink justify-between">
            <HomeHeroText />
            <HomeBottom />
        </div>
    </div>
  )
}

export default Home;
