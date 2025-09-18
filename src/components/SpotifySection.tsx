import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SpotifySong {
  id: string;
  title: string;
  artist: string;
  embedUrl: string;
}

interface SpotifySectionProps {
  favoriteSongs: SpotifySong[];
  description: string;
  wideText?: boolean;
}



const SpotifySectionContainer = styled.div`
  margin-bottom: 80px;
  padding: 40px 0;
`;

const SpotifyTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
  margin: 0 0 20px 0;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const SpotifyDescription = styled.p<{ wideText?: boolean }>`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 auto 40px auto;
  max-width: ${props => props.wideText ? '1200px' : '600px'};
  text-align: center;
`;

const TabsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;



const TabContent = styled.div`
  min-height: 200px;
`;

const SongsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SongItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const SpotifyEmbedContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  
  iframe {
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const SpotifySection: React.FC<SpotifySectionProps> = ({ favoriteSongs, description, wideText }) => {

  const renderSongsTab = () => (
    <TabContent>
      <SongsList>
        {favoriteSongs.map((song, index) => (
          <SongItem
            key={song.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <SpotifyEmbedContainer>
              <iframe 
                src={song.embedUrl}
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title={`${song.title} by ${song.artist}`}
              />
            </SpotifyEmbedContainer>
          </SongItem>
        ))}
      </SongsList>
    </TabContent>
  );

  const renderTabContent = () => {
    return renderSongsTab();
  };

  return (
    <SpotifySectionContainer>
      <SpotifyTitle>Music</SpotifyTitle>
      <SpotifyDescription wideText={wideText}>
        {description}
      </SpotifyDescription>

      <TabsContainer>
        {renderTabContent()}
      </TabsContainer>
    </SpotifySectionContainer>
  );
};

export default SpotifySection;
