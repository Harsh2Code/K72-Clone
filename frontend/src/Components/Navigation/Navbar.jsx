import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../Context/NavContext';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navGreenRef = useRef(null);
    const bgChange = useRef(null)
    const bgChange2 = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // Determine background color based on current path
    const bgColorClass = location.pathname === '/projects' ? 'bg-white' : 'transparent';

    return (
        <div className={`z-4 flex fixed top-0 w-screen items-between justify-between cursor-pointer relative ${bgColorClass}`}>
            <div className='p-2 z-10'>
                <Link to="/" reloadDocument>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 103 44">
                        <path fill={location.pathname === '/projects' ? 'black' : 'white'} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </Link>
            </div>
            <div onClick={() => {
                console.log('Hamburger clicked, setting navOpen to true');
                setNavOpen(true);
            }} onMouseEnter={() => {
                navGreenRef.current.style.top = '0px';
                bgChange.current.style.backgroundColor = location.pathname === '/projects' ? 'black' : 'black';
                bgChange2.current.style.backgroundColor = location.pathname === '/projects' ? 'black' : 'black';
            }
            }
                onMouseLeave={
                    () => {
                        navGreenRef.current.style.top = '-100vh';
                        bgChange.current.style.backgroundColor = location.pathname === '/projects' ? 'white' : 'white';
                        bgChange2.current.style.backgroundColor = location.pathname === '/projects' ? 'white' : 'white';
                    }
                }
                className='h-[3rem] w-[16vw] relative'>
                <div className="h-full w-full bg-black flex flex-col items-end justify-center cursor-pointer">
                    <div ref={bgChange} className='h-[1.5px] w-[45px] bg-white hover:bg-black z-37 mx-16'></div>
                    <div ref={bgChange2} className='h-[1.5px] w-[22px] bg-white hover:bg-black mt-1 z-37 mx-16'></div>
                </div>
                <div ref={navGreenRef} className="absolute top-[-100vh] left-0 w-screen h-full bg-[#D3fd50] transition-all duration-500 z-36"></div>
            </div>
        </div>
    )
}

export default Navbar
