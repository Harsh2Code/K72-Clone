import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1:
      'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2:
      'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
  }, {
    image1:
      'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    image2:
      'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
  }, {
    image1:
      'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2:
      'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
  },
{
    image1:
      'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
    image2:
      'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
  },
  {
    image1:"https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377",
    image2:"https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14" ,
  },
  {
    image1:"https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000" ,
    image2:"https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821" ,
  },
  {
    image1:"https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757" ,
    image2:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47" ,
  },
  {
    image1:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47" ,
    image2:"https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124" ,
  },

]

  // const images = [
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
//     image2:
//       'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
//     image2:
//       'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
//     image2:
//       'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
//     image2:
//       'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
//   },
// ];


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 1
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -500%',
        scrub: true,
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 bg-white'>
      <div className=' pt-[30vh]'>
        <h2 className='font-[font2] lg:text-[16vw] text-start relative uppercase text-black'>Projets<sup className='absolute top-18 text-8xl'>16</sup></h2>
      </div>
      <div className='lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[60vh] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
         <div className="h-[30vw] w-full bg-black text-9xl text-start font-[font2] bolder mt-8">
           <div className="uppercase hover:text-[#f3fd50]">Contact</div>
         </div>
      </div>
    </div>
  )
}

export default Projects





// import gsap from 'gsap';
// import React, { useEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ProjectCard from '../Components/Projects/ProjectCard';

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
//     image2:
//       'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
//     image2:
//       'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
//     image2:
//       'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
//   },
//   {
//     image1:
//       'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
//     image2:
//       'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
//   },
// ];

// const Projects = () => {
//   const projects = images; // Use first 4 projects for faster load

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.projects-scroll-trigger',
//         y: 10,
//         start: 'top 69%',
//         end: 'top -150%',
//         stagger: 0.6,
//         scrub: true,
//         markers: true,
//         // pin: true,
//         // pinSpacing: true,
//         toggleActions: "play none none reverse",
//       },
//     });

//     gsap.utils.toArray('.hero').forEach((hero, i) => {
//       tl.fromTo(
//         hero,
//         { height: '100px', opacity: 1, transformOrigin: 'bottom', stagger: 2, pin: true, pinSpacing: true},
//         { height: '60vh', opacity: 1, ease: 'power3.out', duration: 3 },
//         i * 2
//       );
//     });
//   }, []);

//   return (
//     <div className="bg-white">
//       <div className="text-[24vh] font-[font1] uppercase absolute left-0 top-[40vh] my-auto">
//         Projets
//       </div>
//       <div className="mt-[65vh]">
//         <div className="projects-scroll-trigger">
//           {projects.map(function (elem, idx) {
//             return (
//               <div
//                 key={idx}
//                 className="hero w-full lg:h-[60vh] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
//               >
//                 <ProjectCard image1={elem.image1} image2={elem.image2} />
//               </div>
//             );
//           })}
//         </div>
//         <div className="h-[30vw] w-screen bg-black text-9xl text-start font-[font2] bolder mt-8">
//           <div className="uppercase hover:text-[#f3fd50]">Contact</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
