import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const expertiseRef = useRef(null)
  const projectsRef = useRef(null)
  const creationRef = useRef(null)
  const cultureRef = useRef(null)
  const personImage = useRef(null)

  const personImages = [
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/joel_640X960_3.jpg?w=640&h=960&s=7fcd2cb26f9ffb7cb96fda9c5e707496',
    'https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef',
    'https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02',
    'https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/PLP2_640x960.jpg?w=640&h=960&s=277b83adbf80a1c60a1c7ee72dfdf5cf',
  ]

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })

    // gsap.from(expertiseRef.current, {
    //   x: '50%',
    //   scrollTrigger: {
    //     trigger: expertiseRef.current,
    //     scrub: 1,
    //     start: 'top 80%',
    //     end: 'top 20%',
    //   }
    // })

    gsap.from(projectsRef.current, {
      x: '-200%',
      scrollTrigger: {
        trigger: projectsRef.current,
        scrub: 1,
        start: 'top 95%',
        end: 'top 20%',
      }
    })

    gsap.from(creationRef.current, {
      x: '-150%',
      scrollTrigger: {
        trigger: creationRef.current,
        scrub: 1,
        start: 'top 95%',
        end: 'top 20%',
      }
    })

    gsap.from(cultureRef.current, {
      x: '-100%',
      scrollTrigger: {
        trigger: cultureRef.current,
        scrub: 1,
        start: 'top 95%',
        end: 'top 60%',
      }
    })

  })


  return (
    <div className='parent'>
      <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-60 lg:left-[30vw] left-[30vw]'>
        <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" loading='lazy' alt="" />
      </div>
      <div id='page1' className='py-1 '>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] w-[100vw] mr-0 lg:mt-20 mt-4 p-3'>
            <p className='lg:text-4xl w-full text-[4vh] text-pretty text-left uppercase leading-tight'>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className="px-10 py-20 overflow-hidden">
        <div className='flex items-start'>
          <div className='border-t-[1px] w-28 border-black'>
            <h1 className='mt-4'>EXPERTISE</h1>
          </div>
          <ul ref={expertiseRef} className='text-3xl lg:text-xl ml-[30vw]'>
            <li className='border-b-[1px] border-black'>Stratégie</li>
            <li className='border-b-[1px] border-black'>Publicité</li>
            <li className='border-b-[1px] border-black'>Branding</li>
            <li className='border-b-[1px] border-black'>Design</li>
            <li className='border-b-[1px] border-black'>Contenu</li>
          </ul>
        </div>
        <div className='lg:flex text-2xl lg:text-xl gap-20 justify-start ml-[5vw] mt-20'>
          <p ref={projectsRef} className='lg:w-[25vw] text-wrap text-left'>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
          <p ref={creationRef} className='lg:w-[25vw] text-wrap text-left'>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
          <p ref={cultureRef} className='lg:w-[25vw] text-wrap text-left'>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
        </div>
      </div>
      <div id="page3" className=' py-20'>
        
        <div className='border-t-[1px] w-screen border-black'>
          <h1 className='mt-4'>NOTRE ÉQUIPE</h1>
        </div>
        <div className='w-screen relative z-1' >
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[0]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; personImage.current.parentElement.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative '>
              <h1 className='z-10 bolder font-[font1] group-hover:text-black'>Conseillère</h1>
              <p className="font-[font2] text-4xl text-white bolder hover:text-black z-10 group-hover:text-black">Sophie Auger</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[1]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white z-10'>
              <h1 className='z-10 bolder font-[font1] group-hover:text-black'>Directeur principal</h1>
              <p className="font-[font2] text-4xl text-white bolder z-10 group-hover:text-black">Carl Godbout</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[2]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white z-10'>
              <h1 className='z-10 bolder font-[font1] group-hover:text-black'>Conceptrice-rédactrice</h1>
              <p className="font-[font2] text-4xl text-white bolder z-10  group-hover:text-black">Camille Brière</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[3]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Conseillère</h1>
              <p className="font-[font2] text-4xl text-white bolder z-10  group-hover:text-black">Claire Robert</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[4]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>VPP et directeur général</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Pierre-Luc Paiement</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[5]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directrice artistique</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Mélanie Laviolette</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[6]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directrice de la stratégie</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Michèle Riendeau</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[7]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directrice conseil</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Meggie Lavoie</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[8]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directeur artistique</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Alex Sauvageau</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[9]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Conseiller</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Philippe Perreault</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[10]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Stratège</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Béatrice Roussin</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[11]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Conseillère</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Lou Gravel-Jean</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[12]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Planificateur stratégique principal</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Olivier Roeyaerts</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[13]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Conseillère</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Hélène Conti</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[14]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Coordonatrice</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Lawrence Meunier</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[14]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directrice principale</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Isabelle Beauchemin</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[15]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directeur de création ajdoint</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Hugo Joseph</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[16]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Designer graphique</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Olivier Duclos</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[17]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directeur de création adjoint</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Joël Letarte</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[18]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directrice de création</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Chantal Gobeil</p>
            </div>
          </div>
          <div className='relative group' onMouseEnter={() => { personImage.current.src = personImages[19]; personImage.current.style.display = 'block'; personImage.current.parentElement.style.display = 'block'; }} onMouseLeave={() => { personImage.current.src = ""; personImage.current.style.display = 'none'; }}>
            <div className="absolute left-0 top-0 w-full h-0 bg-[#D3fd50] transition-[height] duration-500 group-hover:h-full"></div>
            <div className='flex font-font[1] items-center justify-between border-y-1 py-4 px-10 border-white relative z-10  group-hover:text-black'>
              <h1 className='z-10  bolder font-[font1] group-hover:text-black'>Directeur de création adjoint</h1>
              <p className="font-[font2] text-4xl text-white bolder group-hover:text-black">Sébastien Roy</p>
            </div>
          </div>

        </div>
      </div>
      <div className='h-[45vh] w-[16vw] sticky bottom-[20vh] rounded-md left-1/4 z-50' style={{ display: 'none' }}>
          <img ref={personImage} className='object-cover rounded-md overflow-hidden w-full h-full' loading="lazy" src="" alt="" />
        </div>
    </div>
  )
}

export default Agence