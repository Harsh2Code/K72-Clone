import React from 'react';

const Video = ({ isSmall = false }) => {
  const containerClass = isSmall 
    ? "relative h-full w-full" 
    : "fixed inset-0 z-0 h-full w-full";

  return (
    <div className={containerClass}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline

        crossOrigin="anonymous"
      >
        <source src='/69496b2d.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

// <div className="fixed inset-0 z-0 w-screen">
//   <video
//     className="w-full h-full object-cover"
//     autoPlay
//     loop
//     muted
//     playsInline
//   >
//     <source src= type='video/mp4' />
//     Your browser does not support the video tag.
//   </video>
// </div>