import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="relative pt-[56.25%] w-full overflow-hidden rounded-lg shadow-lg mb-8">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;