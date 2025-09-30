import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsAnimationTest = () => {
  useEffect(() => {
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.test-container',
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: true,
      markers: true,
    },
    });

    gsap.utils.toArray('.test-hero').forEach((hero, i) => {
      tl.fromTo(
        hero,
        { height: '100px', opacity: 1 },
        { height: '200px', opacity: 1, ease: 'power3.out', duration: 1 },
        i * 0.5
      );
    });
  }, []);

  return (
    <div className="test-container" style={{ marginTop: '100vh', padding: '20px' }}>
      <div className="test-hero" style={{ backgroundColor: 'lightblue', marginBottom: '20px', height: '200px', opacity: 0 }}>
        Test Project 1
      </div>
      <div className="test-hero" style={{ backgroundColor: 'lightcoral', marginBottom: '20px', height: '200px', opacity: 0 }}>
        Test Project 2
      </div>
      <div className="test-hero" style={{ backgroundColor: 'lightgreen', marginBottom: '20px', height: '200px', opacity: 0 }}>
        Test Project 3
      </div>
    </div>
  );
};

export default ProjectsAnimationTest;
