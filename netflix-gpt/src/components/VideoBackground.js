import React from 'react'

const VideoBackground=() => {

  return <div className="w-screen"><iframe
    className="w-screen aspect-video"
   src="https://www.youtube.com/embed/fKJVxItLiUw?si=68OywZPwMW18qu6T?&autoplay=1&mute=1?rel=0" 
   title="YouTube video player" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
       ></iframe></div>;
  
};

export default VideoBackground; 