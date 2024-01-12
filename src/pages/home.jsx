import "./home.css";
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
        title="Embedded youtube"
      />
    </div>
  );

function Home(){
    return (
            <div className="content page">
            <h1>Home</h1>
            <YoutubeEmbed embedId="PYVxaMyfSTc?si=jcX7N5nwVPzp6wNN" />
            <YoutubeEmbed embedId="VoX7sR3irmI?si=-2uf2AtbmvHxr9x-" />
            <YoutubeEmbed embedId="WepSN_Omo_w?si=dhwfB378dcwygBip" />
            </div>
            

    );
}

export default Home;