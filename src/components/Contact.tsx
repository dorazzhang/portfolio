import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
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
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  text-align: center;
`;

const ChatDescription = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  max-width: 610px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactItem = styled.a`
  font-family: 'Lora', serif;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ContactIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconSVG = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

const ContactDetails = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactLabel = styled.span`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const ContactValue = styled.span`
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer
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
        <PageTitle>Let's Chat!</PageTitle>
        
        <ChatDescription>
          I'm currently exploring the many realms of computer science. I love hearing about innovative ideas, 
          forming meaningful connections, and gaining new knowledge! If anything on my website looks of interest 
          to you, please don't hesitate to reach out :)
        </ChatDescription>
        
        <ContactItem href="mailto:dz366@cornell.edu">
          <ContactIcon>
            <IconSVG viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727l10.637 7.985L23.273 3.82h.727c.904 0 1.636.732 1.636 1.637z"/>
            </IconSVG>
          </ContactIcon>
          <ContactDetails>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>dz366@cornell.edu</ContactValue>
          </ContactDetails>
        </ContactItem>
        
        <ContactItem href="https://www.linkedin.com/in/dorajzhang/" target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <IconSVG viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </IconSVG>
          </ContactIcon>
          <ContactDetails>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactValue>linkedin.com/in/dorajzhang</ContactValue>
          </ContactDetails>
        </ContactItem>
        
        <ContactItem href="https://github.com/dorazzhang" target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <IconSVG viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </IconSVG>
          </ContactIcon>
          <ContactDetails>
            <ContactLabel>GitHub</ContactLabel>
            <ContactValue>github.com/dorazzhang</ContactValue>
          </ContactDetails>
        </ContactItem>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
