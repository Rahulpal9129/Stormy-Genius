import React from "react";
import VideoCard from "./VedioCard";
import "./Podcust.css";

const Podcust = () => {
  const videos = [
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/_p8y85r44dQ" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/getiZv-Bo1k" },
    { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/Apbi5P2qpv8" },
    { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/uO6kOZbcDXw" },
   
  ];

 

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <VideoCard key={video.id}  url={video.url} />

            
      ))}
    </div>
  );
};

export default Podcust;

