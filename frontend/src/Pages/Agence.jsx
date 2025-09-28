import React, { useRef } from 'react'

function Agence() {

    const imageDivRef = useRef(null);
    const imageUrl = useRef(null);
    const imageArray = [
        'image1',
        'image2',
        'image3',
        'image4',
        'image5',
    ];

    useGSAP(function() {
        gsap.to(imageDivRef.current,{
            scrollTrigger: {
                trigger:imageDivRef.current,
                markers: true,
                start: "top 30%",
                end: "top -70%",
                scrub: "true",
                pin: "true",
                onUpdate: (elem) => {
                    const imageIndex = math.round(elem.progress * imageArray.length - 1);
                    imageUrl = imageArray[imageIndex];
                }
            }
        })
    });

    gsap.registerPlugin(ScrollTrigger);

    return (
        <>
        <div className='section1 py-1'>
            <div>
                <div ref={imageDivRef} className='absolute top-96 overflow-hidden left-[30vw] h-[20vw] w-[15vw] rounded-3x'>
                    <img ref={imageUrl} className="w-full h-full object-cover" src="imageArray[0]" alt="" />
                </div>
                <div className="mt-[55vh]">
                    <h1 className='text-[20vw] text-center uppercase leading-[18vw]'> Soixan7e <br /> Douze </h1>
                </div>
                <div className='relative font-[font2]'>
                    <div className='pl-[40%] mt-20'>
                        <p className='text-6xl'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus voluptatibus ea doloribus et repellat nobis libero vitae expedita odit sunt distinctio voluptatum, quo sequi! Nostrum voluptatum voluptatem dicta officia veniam?
                            Consequuntur, dolore. Corporis </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section2"></div>
        </>
    )
}

export default Agence