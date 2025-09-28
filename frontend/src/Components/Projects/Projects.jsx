import React from 'react'

const Projects = () => {
    return (
        <div className='bg-white'>
            <div className='text-[24vh] font-[font1] uppercase absolute left-0 top-[40vh] my-auto'>Projets</div>
            <div className='mt-[65vh]'>
                <div className='flex justify-between p-4'>
                    <div className="bg-red-100 h-[25vw] w-1/2 border-4 rounded-none relative hover:rounded-3xl transition-all duration-500 ease-in-out border-white group">
                        <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                        <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center bg-black/50 top-0 left-0 h-full w-full absolute ">
                            <div className='text-5xl text-white p-4 border-2 border-white rounded-full'>VOIR LE PROJECT</div>
                        </div>
                        <div className="bg-red-100 h-[10vw] w-1/2 border-4 rounded-none hover:rounded-3xl transition-all duration-500 ease-in-out border-white"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;