import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavbarContext } from '../../Context/NavbarContext';
import { Link } from 'react-router-dom';

const FullScreenNav = () => {
  const fullScreenRef = useRef(null);
  const fullNavLinksRef = useRef(null);
  const tl = useRef(null);
  const context = useContext(NavbarContext);
  const [navOpen, setNavOpen] = context;

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });

      // Initial state
      gsap.set('.stairing', { height: 0 });
      gsap.set('.link', { opacity: 0, rotateX: 90 });
      gsap.set(fullNavLinksRef.current, { opacity: 0 });

      // Open animation
      tl.current.to('.stairing', {
        height: '100vh',
        stagger: { amount: 0.2 },
        duration: 0.5
      })
        .to(fullNavLinksRef.current, {
          opacity: 1,
          duration: 0.3
        }, "-=0.4")
        .to('.link', {
          opacity: 1,
          rotateX: 0,
          stagger: { amount: 0.2 },
          duration: 0.5
        }, "-=0.3");
    }

    if (navOpen) {
      fullScreenRef.current.style.display = 'block';
      tl.current.restart();
    } else {
      tl.current.reverse();
      tl.current.eventCallback("onReverseComplete", () => {
        fullScreenRef.current.style.display = 'none';
      });
    }
  }, [navOpen]);

  return (
    <div ref={fullScreenRef} style={{ display: 'none' }} className='fullScreenNav fixed inset-0 z-50 overflow-hidden'>
      <div className='stairParent h-screen w-screen flex absolute top-0 left-0'>
        <div className="h-full w-full flex">
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
          <div className="stairing w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative h-screen flex flex-col justify-center px-4'>
        {/* Navbar header */}
        <div className='navlink absolute top-4 left-0 right-0 flex justify-between items-center z-10'>
          <div className='p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 103 44">
              <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
          <div onClick={() => setNavOpen(false)} className='relative h-16 w-16  rounded-full bg-black cursor-pointer mx-4 '>
            <div className="h-16 w-0.5 rotate-45 origin-center absolute bg-white"></div>
            <div className="h-16 w-0.5 -rotate-45 origin-center absolute bg-white left-0"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {/* Projets Section */}
          <div className="link relative flex flex-col items-center border-t border-gray-100 pt-4">
            <Link to="/projects">
              <h1 className="lg:lg:text-7xl font-[font2] leading-none uppercase text-white text-center">Projets</h1>
              <div className="absolute inset-0 flex overflow-hidden">

                <div className="flex items-center movelink  whitespace-nowrap  animate-marquee bg-[#d4fd50]">
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT VOIR</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full object-cover mx-4" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT VOIR</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full object-cover mx-4" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" crossOrigin="anonymous" />
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT VOIR</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full object-cover mx-4" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT VOIR</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full object-cover mx-4" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
              </div>
            </Link>
          </div>

          {/* Agence Section */}
          <div className="link relative flex flex-col items-center border-t border-gray-100 pt-4">
            <Link to="/agence">
              <h1 className="lg:lg:text-7xl font-[font2] leading-none uppercase text-white text-center">Agence</h1>
              <div className=" absolute inset-0 flex overflow-hidden ">
                <div className="flex movelink  items-center whitespace-nowrap animate-marquee bg-[#d4fd50]">
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT SAVOIR</h2>
                    <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" crossOrigin="anonymous" />
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT SAVOIR</h2>
                    <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" crossOrigin="anonymous" />
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT SAVOIR</h2>
                    <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR TOIT SAVOIR</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
                </div>
              </div>
            </Link>
          </div>

          {/* Contact Section */}
          <div className="link relative flex flex-col items-center border-t border-gray-100 pt-4">
            <Link to="/">
              <h1 className="lg:lg:text-7xl font-[font2] leading-none uppercase text-white text-center">Contact</h1>
              <div className=" absolute inset-0 flex overflow-hidden">
                <div className="flex movelink  items-center whitespace-nowrap animate-marquee bg-[#d3fd50]">
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR ENVOYER UN FAX</h2>
                  <i className="ri-poker-diamonds-fill text-black text-5xl mx-8"></i>
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR ENVOYER UN FAX</h2>
                  <i className="ri-poker-diamonds-fill text-black text-5xl mx-8"></i>
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR ENVOYER UN FAX</h2>
                  <i className="ri-poker-diamonds-fill text-black text-5xl mx-8"></i>
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">POUR ENVOYER UN FAX</h2>
                  <i className="ri-poker-diamonds-fill text-black text-5xl mx-8"></i>
                </div>
              </div>
              </Link>
          </div>

          {/* Blogue Section */}
          <div className="link relative flex flex-col items-center border-y-1 border-gray-100 pt-4">
            <Link to="/">
              <h1 className="lg:lg:text-7xl font-[font2] leading-none uppercase text-white text-center">Blogue</h1>
              <div className="absolute inset-0 flex overflow-hidden">
                <div className="flex movelink items-center whitespace-nowrap animate-marquee bg-[#d3fd50]">
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">LIRE LES ARTICLES</h2>
                    <img className="h-[5vw] shrink w-40 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" crossOrigin="anonymous" />
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">LIRE LES ARTICLES</h2>
                    <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" crossOrigin="anonymous" />
                    <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">LIRE LES ARTICLES</h2>
                    <img className="h-[5vw] shrink w-40 rounded-full mx-4" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                  <h2 className="font-[font2] lg:text-7xl leading-none uppercase mx-4 text-black">LIRE LES ARTICLES</h2>
                  <img className="h-[5vw] shrink-0 w-40 rounded-full mx-4" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
