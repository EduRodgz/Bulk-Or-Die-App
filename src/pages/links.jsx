
import "./links.css";
import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={`YouTube Video ${embedId}`}
    />
  </div>
);

const Links = () => {
  const videoIds = [
    "PYVxaMyfSTc",
    "VoX7sR3irmI",
    "0VbV5MNZx5A",
  ];

  return (
    <div className="links">
      <h1>💯 Links for Beginner Bulkers</h1>
      {videoIds.map((id) => (
        <YoutubeEmbed key={id} embedId={id} />
      ))}
    </div>
  );
};

export default Links;
