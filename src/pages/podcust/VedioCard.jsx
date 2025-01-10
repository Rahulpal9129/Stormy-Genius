import React from "react";
import './VedioCard.css'

const VideoCard = ({ title, url }) => {
  return (
    <div className="video-card">
      <iframe
        width="560"
        height="315"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
    </div>
  );
};

export default VideoCard;
