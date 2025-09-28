import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <>
        <div className='-py-5 text-center flex-shrink'>
            <div className="w-screen font-[font1] lg:text-[8vw] transition -mb-2 uppercase leading-[9.5vw]"> L'étincelle </div>
            <div className='lg:text-[9.5vw] text-[8vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[9.5vw]'>
                qui
                <div className='h-[100px] w-[200px] mt-[1rem] rounded-full -mt-3 overflow-hidden '>
                    <Video isSmall={true} />
                </div>
                génère
            </div>
            <div className="w-screen font-[font1] lg:text-[8vw] mt-2 uppercase leading-[10vw]"> la créativité </div>
        </div>

         </>
    )
}

export default HomeHeroText