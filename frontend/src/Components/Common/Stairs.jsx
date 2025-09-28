import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Stairs = (props) => {
    const currentPath = useLocation().pathname;
    const pageRef = useRef(null);
    const stairParentRef = useRef(null);


     useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='stairParent h-screen w-screen flex fixed z-20 top-0'>
                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs;