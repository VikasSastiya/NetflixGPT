import React, { useState, useEffect, useRef } from "react";

const VideoBackground = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // Ensure the message comes from YouTube
      if (event.origin !== "https://www.youtube.com") return;

      try {
        const data = JSON.parse(event.data);
        // Check if the video has ended (event 0 means 'ended')
        if (data.event === "onStateChange" && data.info === 0) {
          setVideoEnded(true); // Show image if the video has ended
        }
      } catch (error) {
        console.error("Error parsing message from YouTube:", error);
      }
    };

    // Add the YouTube API parameters to enable postMessage communication
    const src = "https://www.youtube.com/embed/fKJVxItLiUw?enablejsapi=1&autoplay=1&mute=1";
    if (iframeRef.current) {
      iframeRef.current.src = src;
    }

    // Listen for messages from the YouTube iframe
    window.addEventListener("message", handleMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      {videoEnded ? (
        // Show an image when the video has ended
        <img
          src="https://i.ytimg.com/vi/fKJVxItLiUw/maxresdefault.jpg"
          alt="Video ended"
          className="w-full h-full object-cover"
        />
      ) : (
        // Embed the YouTube video using an iframe
        <iframe
          className="w-screen h-screen"
          ref={iframeRef}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
// import React, { useState, useEffect, useRef } from "react";

// const YoutubeEmbedWithImage = () => {
//   const [videoEnded, setVideoEnded] = useState(false);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     // Load the IFrame API
//     window.onYouTubeIframeAPIReady = function () {
//       playerRef.current = new window.YT.Player("youtube-player", {
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//     };

//     // Load the IFrame API script
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   }, []);

//   // Called when the video player is ready
//   const onPlayerReady = (event) => {
//     console.log("Video is loaded and ready");
//     // You can display the image after video loads, if needed
//   };

//   // Called when the video state changes (e.g., ended)
//   const onPlayerStateChange = (event) => {
//     if (event.data === window.YT.PlayerState.ENDED) {
//       setVideoEnded(true); // Show image when the video ends
//     }
//   };

//   return (
//     <div>
//       {videoEnded ? (
//         // Show an image when the video has ended
//         <img
//           src="https://via.placeholder.com/640x390"
//           alt="Video ended"
//           style={{ width: "640px", height: "390px" }}
//         />
//       ) : (
//         // Embed the YouTube video
//         <div id="youtube-player" style={{ width: "640px", height: "390px" }}></div>
//       )}
//     </div>
//   );
// };

// export default YoutubeEmbedWithImage;

// import { useState, useEffect, useRef } from "react";

// const VideoBackground = () => {
//   const [videoEnded, setVideoEnded] = useState(false);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const handleMessage = (event) => {
//       // Ensure the message comes from YouTube
//       if (event.origin !== "https://www.youtube.com") return;

//       const data = JSON.parse(event.data);

//       // Check if the video has ended (event 0 means 'ended')
//       if (data.event === "onStateChange" && data.info === 0) {
//         setVideoEnded(true); // Show image if the video has ended
//       }
//     };

//     // Listen for messages from the YouTube iframe
//     window.addEventListener("message", handleMessage);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);

//   return (
//     <div className="w-screen">
//       {videoEnded ? (
//         // Show an image when the video has ended
//         <img 
//           src="https://i.ytimg.com/vi/fKJVxItLiUw/maxresdefault.jpg"
//           alt="Video ended"
        
//         />
//       ) : (
//         // Embed the YouTube video using an iframe
//         <iframe className="w-screen aspect-video"
//           ref={iframeRef}
         
//           src="https://www.youtube.com/embed/fKJVxItLiUw?rel=0&autoplay=1&mute=1" 
//           title="YouTube video player" 
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//            referrerpolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default VideoBackground;

// const VideoBackground=() => {

//   return <div className="w-screen"><iframe
//     className="w-screen aspect-video"
//    src="https://www.youtube.com/embed/fKJVxItLiUw?si=68OywZPwMW18qu6T?&autoplay=1&mute=1?rel=0" 
//    title="YouTube video player" 
//    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     referrerpolicy="strict-origin-when-cross-origin"
//        ></iframe></div>;
  
// };

// export default VideoBackground; 