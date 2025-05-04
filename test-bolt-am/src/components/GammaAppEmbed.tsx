import React from 'react';

interface GammaAppEmbedProps {
  url: string;
}

const GammaAppEmbed: React.FC<GammaAppEmbedProps> = ({ url }) => {
  return (
    <div className="relative pt-[150%] w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title="Gamma App Document"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default GammaAppEmbed;