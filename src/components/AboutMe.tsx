/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SpotifySection from './SpotifySection';

const AboutContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
  padding: 100px 0 40px 0;
  position: relative;
  overflow: hidden;
`;

const Star = styled.div<{ left: string; top: string; size: string; delay: string }>`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.size};
  height: ${props => props.size};
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  filter: blur(1px);
  animation: twinkle 3s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  z-index: 1;

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  text-align: center;
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  align-items: stretch;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;



const AboutSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const AboutText = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HobbiesSection = styled.div`
  margin-bottom: 50px;
`;

const HobbiesTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

const HobbyCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 30px 25px;
  text-align: left;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

const HobbyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const HobbyIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 18px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const HobbyTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const HobbyDescription = styled.p`
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

// New styled components for the spaced hobby sections
const HobbySection = styled.div`
  margin-bottom: 80px;
  padding: 40px 0;
`;

const HobbySectionTitle = styled.h3<{ alignLeft?: boolean }>`
  font-family: 'Lora', serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
  margin: 0 0 20px 0;
  text-align: ${props => props.alignLeft ? 'left' : 'center'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const HobbySectionDescription = styled.p<{ centerText?: boolean; wideText?: boolean }>`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 auto 40px auto;
  max-width: ${props => props.wideText ? '1200px' : '600px'};
  text-align: ${props => props.centerText ? 'center' : 'left'};
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin: 30px 0 50px 0;
`;

const HobbyImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
`;

const HobbyImageGridWide = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HobbyImageCard = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

const HobbyCardDescription = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  color: white;
`;

const HobbyCardText = styled.p`
  font-family: 'Lora', serif;
  font-size: 0.9rem;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const HobbyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const BookCoversGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

const BookCover = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
`;

const MusicCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 700px;
  margin: 0 auto;
`;

const MusicCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

const MusicCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const MusicCardIcon = styled.div`
  font-size: 2rem;
  margin-right: 15px;
`;

const MusicCardTitle = styled.h4`
  font-family: 'Lora', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const MusicCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MusicArtist = styled.div`
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const MusicGenre = styled.div`
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

// New styled components for left-right layout
const HobbySectionContent = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HobbyTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HobbyImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



// Reading section specific components
const ReadingTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ReadingParagraph = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-align: left;
`;

const ReadingLink = styled.span`
  color: #4ecdc4;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  
  &:hover {
    color: #45b7d1;
  }
`;

const FunSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PictureGallery = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  margin: 0 auto;
`;

const PictureCard = styled(motion.div)<{ size?: string; left: string; top: string; width?: string; height?: string }>`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.width || props.size || '200px'};
  height: ${props => props.height || props.size || '200px'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  
  &:hover {
    z-index: 100;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }
`;

const PictureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AboutMe: React.FC = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <StarsContainer>
        <Star left="5%" top="15%" size="4px" delay="0s" />
        <Star left="15%" top="45%" size="1.5px" delay="0.3s" />
        <Star left="25%" top="25%" size="2px" delay="0.6s" />
        <Star left="35%" top="75%" size="1px" delay="0.9s" />
        <Star left="45%" top="35%" size="3px" delay="1.2s" />
        <Star left="55%" top="65%" size="1.5px" delay="1.5s" />
        <Star left="65%" top="20%" size="2px" delay="1.8s" />
        <Star left="75%" top="80%" size="1px" delay="2.1s" />
        <Star left="85%" top="40%" size="3px" delay="2.4s" />
        <Star left="95%" top="60%" size="1.5px" delay="2.7s" />
        <Star left="20%" top="85%" size="2px" delay="0.2s" />
        <Star left="40%" top="10%" size="1px" delay="0.5s" />
        <Star left="60%" top="90%" size="3px" delay="0.8s" />
        <Star left="80%" top="15%" size="1.5px" delay="1.1s" />
        <Star left="10%" top="70%" size="2px" delay="1.4s" />
        <Star left="30%" top="95%" size="1px" delay="1.7s" />
        <Star left="50%" top="5%" size="4px" delay="2.0s" />
        <Star left="70%" top="50%" size="1.5px" delay="2.3s" />
        <Star left="90%" top="25%" size="2px" delay="2.6s" />
        <Star left="8%" top="35%" size="2.5px" delay="0.1s" />
        <Star left="18%" top="65%" size="1px" delay="0.4s" />
        <Star left="28%" top="15%" size="3px" delay="0.7s" />
        <Star left="38%" top="55%" size="1.5px" delay="1.0s" />
        <Star left="48%" top="25%" size="2px" delay="1.3s" />
        <Star left="58%" top="75%" size="1px" delay="1.6s" />
        <Star left="68%" top="35%" size="2.5px" delay="1.9s" />
        <Star left="78%" top="65%" size="1.5px" delay="2.2s" />
        <Star left="88%" top="45%" size="2px" delay="2.5s" />
        <Star left="12%" top="25%" size="3px" delay="0.15s" />
        <Star left="22%" top="75%" size="1px" delay="0.45s" />
        <Star left="32%" top="45%" size="2px" delay="0.75s" />
        <Star left="42%" top="85%" size="1.5px" delay="1.05s" />
        <Star left="52%" top="15%" size="3px" delay="1.35s" />
        <Star left="62%" top="55%" size="1px" delay="1.65s" />
        <Star left="72%" top="25%" size="2.5px" delay="1.95s" />
        <Star left="82%" top="75%" size="1.5px" delay="2.25s" />
        <Star left="92%" top="35%" size="2px" delay="2.55s" />
        <Star left="7%" top="55%" size="1.5px" delay="0.25s" />
        <Star left="17%" top="25%" size="2px" delay="0.55s" />
        <Star left="27%" top="65%" size="1px" delay="0.85s" />
        <Star left="37%" top="35%" size="3px" delay="1.15s" />
        <Star left="47%" top="75%" size="1.5px" delay="1.45s" />
        <Star left="57%" top="25%" size="2px" delay="1.75s" />
        <Star left="67%" top="55%" size="1px" delay="2.05s" />
        <Star left="77%" top="15%" size="2.5px" delay="2.35s" />
        <Star left="87%" top="65%" size="1.5px" delay="2.65s" />
        <Star left="97%" top="45%" size="2px" delay="2.85s" />
      </StarsContainer>
      <ContentWrapper>
        <PageTitle>About Me</PageTitle>
        
        <MainSection>
          <ProfileSection>
            <ProfileImage src="/portfolio/images/profile.PNG" alt="Dora's profile picture" />
          </ProfileSection>
          
          <AboutSection>
            <AboutText>
              Hi! I'm Dora, a student at Cornell University studying Computer Science with a minor in AI/ECE. 
            </AboutText>
            <AboutText>
              I'm interested in exploring the wide-ranging applications of machine learning and AI in the real world.
              I've really just begun my computer science journey, and am embracing the feelings of excitement and anxiety that come with wanting to learn so many new things.
            </AboutText>
            <AboutText>
              My biggest strengths lie in my collaboration skills and adaptability, which I aim to bring to every team I am a part of.
            </AboutText>
          </AboutSection>
        </MainSection>

        <HobbiesSection>
          <HobbiesTitle>What I Love</HobbiesTitle>
          <Divider />
          
          {/* Badminton Section - Left-Right Layout */}
          <HobbySection>
            <HobbySectionTitle alignLeft>Badminton</HobbySectionTitle>
            <HobbySectionContent>
              <HobbyTextContent>
                <HobbySectionDescription>
                  I started playing badminton my junior year of high school, and have since then made so many new friends through it. I love how fast paced and stragetic the game is.
                  I play with a Victor Thruster TK-F racket and my favorite event is mixed doubles!
                </HobbySectionDescription>
              </HobbyTextContent>
              <HobbyImageContent>
                <HobbyImageGrid style={{ 
                  maxWidth: '600px', 
                  margin: '0 0 0 0',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px'
                }}>
                  <HobbyImageCard
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <HobbyImage src="/portfolio/images/badminton_team.JPG" />
                    <HobbyCardDescription>
                      <HobbyCardText>my high school team</HobbyCardText>
                    </HobbyCardDescription>
                  </HobbyImageCard>
                  <HobbyImageCard
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <HobbyImage src="/portfolio/images/badminton_medal.PNG" />
                    <HobbyCardDescription>
                      <HobbyCardText>CIFs! 3rd place in mixed</HobbyCardText>
                    </HobbyCardDescription>
                  </HobbyImageCard>
                  <HobbyImageCard
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <HobbyImage src="/portfolio/images/badminton_cifs.JPG" />
                    <HobbyCardDescription>
                      <HobbyCardText>mid-game snapshot </HobbyCardText>
                    </HobbyCardDescription>
                  </HobbyImageCard>
                </HobbyImageGrid>
              </HobbyImageContent>
            </HobbySectionContent>
          </HobbySection>
          
          <Divider />

          {/* Art Section */}
          <HobbySection>
            <HobbySectionTitle>Art</HobbySectionTitle>
            <HobbySectionDescription centerText wideText>
              Growing up, I've always loved art, especially painting.
              Over quarantine, I would replicate drawings of my favorite movie scenes and try to follow Bob Ross's painting tutorials. While my skills have since deteriorated, I still love painting/drawing for fun.
            </HobbySectionDescription>
            <HobbyImageGridWide>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/fish_painting.jpg" />
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/tiger_drawing.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/snow_painting.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/ponyo_painting.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/beach_painting.jpg"/>
              </HobbyImageCard>
                          </HobbyImageGridWide>
            </HobbySection>
            
            <Divider />

          {/* Reading Section - Left-Right Layout */}
          <HobbySection>
            <HobbySectionTitle alignLeft>Reading</HobbySectionTitle>
            <HobbySectionContent>
              <HobbyTextContent>
                <ReadingTextContent>
                  <ReadingParagraph>
                    I often get into phases where I read 3-5 books within a week (which may be a little unhealthy in hindsight), although I admit I am currently in a reading slump... Some of my childhood favorites include Percy Jackson, Holes, My Father's Dragon, and Harry Potter.
                    The next book on my list is Crying at H-mart by Michelle Zauner.
                  </ReadingParagraph>
                  <ReadingParagraph>
                    If I were to become like any book character, I would want to be like Anabeth Chase from Percy Jackson :D 
                  </ReadingParagraph>
                </ReadingTextContent>
              </HobbyTextContent>
              <HobbyImageContent>
                <BookCoversGrid>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/percyjackson.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/harrypotter.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/demonslayer.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/abriefhistoryoftime.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/holes.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/haikyuu.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/ihopethisdoesntfindyou.jpg"/>
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/range.jpg" />
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/myfathersdragon.jpg" />
                  </BookCover>
                  <BookCover
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <BookImage src="/portfolio/images/thebookthief.jpg" />
                  </BookCover>
                </BookCoversGrid>
              </HobbyImageContent>
            </HobbySectionContent>
          </HobbySection>
          
          <Divider />

          {/* Spotify Section with Embedded Players */}
          <SpotifySection
            favoriteSongs={[
              {
                id: '1',
                title: 'Long Live',
                artist: 'Taylor Swift',
                embedUrl: 'https://open.spotify.com/embed/track/4hqJ4bSlYJOXb6Z4SRmzxs?utm_source=generator'
              },
              {
                id: '2',
                title: 'Vienna',
                artist: 'Billy Joel',
                embedUrl: 'https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator'
              },
              {
                id: '3',
                title: 'kitchen',
                artist: 'SZA',
                embedUrl: 'https://open.spotify.com/embed/track/3VPeA7IW68QRNTfgzb6biZ?utm_source=generator'
              },
              {
                id: '4',
                title: 'swim between trees',
                artist: 'Flipturn',
                embedUrl: 'https://open.spotify.com/embed/track/5qRNdYwaZX0YiBeZvsR38Q?utm_source=generator&theme=0'
              },
              {
                id: '5',
                title: 'Babydoll',
                artist: 'Dominic Fike',
                embedUrl: 'https://open.spotify.com/embed/track/7yNf9YjeO5JXUE3JEBgnYc?utm_source=generator'
              },
              {
                id: '6',
                title: 'Odoriko',
                artist: 'Vaundy',
                embedUrl: 'https://open.spotify.com/embed/track/4UeWKazLR1ZwwSVnLw9Ir9?utm_source=generator'
              },
              {
                id: '7',
                title: 'Yellow',
                artist: 'Coldplay',
                embedUrl: 'https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator'
              },
              {
                id: '8',
                title: 'Guang Hui Sui Yue',
                artist: 'Beyond',
                embedUrl: 'https://open.spotify.com/embed/track/2xsfwyT49o2OCoPieXMxQC?utm_source=generator'
              }
            ]}
            description="I listen to music when I study, drive, go on walks, sleep, etc. Here are some of my favorite songs in no particular order."
            wideText
          />
          
          <Divider />
          
          {/* Friends & Family Section */}
          <HobbySection>
            <HobbySectionTitle>Friends & Family</HobbySectionTitle>
            <HobbySectionDescription centerText wideText>
              I would not be where I am without the people in my life. Fun fact: I have been friends with the same group of people since elementary school!
            </HobbySectionDescription>
            <HobbyImageGrid style={{ 
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              gap: '20px',
              maxWidth: '1200px'
            }}>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/dog.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/family.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/college.PNG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends1.JPEG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends8.JPG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/nexus.JPG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends7.JPG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends4.PNG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/tasa.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/child.JPG"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends5.jpg"/>
              </HobbyImageCard>
              <HobbyImageCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HobbyImage src="/portfolio/images/friends6.JPG"/>
              </HobbyImageCard>
            </HobbyImageGrid>
          </HobbySection>
        </HobbiesSection>


      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutMe;
