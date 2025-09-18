import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

// Import components
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

// Scroll to top component for route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Disable browser scroll restoration and set position instantly
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
  font-family: 'Lora', serif;
`;

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
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

const LoadingBar = styled.div`
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: white;
  border-radius: 10px;
  transition: width 0.1s ease;
`;

const LoadingText = styled(motion.h2)`
  font-size: 2rem;
  margin: 0;
  font-weight: 300;
  letter-spacing: 2px;
`;

const Percentage = styled.span`
  font-size: 3rem;
  font-weight: bold;
  margin: 20px 0;
  display: block;
`;

const WelcomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const WelcomeTitle = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const WelcomeSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin: 20px 0 0 0;
  font-weight: 300;
  opacity: 0.9;
  letter-spacing: 1px;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 40px;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Navigation = styled.nav`
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 24px;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  
  ${props => props.active && `
    text-decoration: underline;
    text-underline-offset: 4px;
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const WebsiteSignature = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  pointer-events: none;
`;

const DoraIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  
  svg {
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
  }
`;

const NavigationWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <TopBar>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink 
              active={isActive('/')} 
              onClick={() => handleNavClick('/')}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={isActive('/about')} 
              onClick={() => handleNavClick('/about')}
            >
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={isActive('/projects')} 
              onClick={() => handleNavClick('/projects')}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={isActive('/resume')} 
              onClick={() => handleNavClick('/resume')}
            >
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={isActive('/contact')} 
              onClick={() => handleNavClick('/contact')}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </TopBar>
  );
};

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'loading' | 'welcome' | 'home'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setCurrentPage('welcome'), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentPage === 'welcome') {
      const timer = setTimeout(() => {
        setCurrentPage('home');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage]);



  if (currentPage === 'loading') {
    return (
      <LoadingContainer
        key="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
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
        <LoadingText
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </LoadingText>
        
        <LoadingBar>
          <LoadingProgress
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </LoadingBar>
        
        <Percentage>
          {progress}%
        </Percentage>
      </LoadingContainer>
    );
  }

  if (currentPage === 'welcome') {
    return (
      <WelcomeContainer
        key="welcome"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
        <WelcomeTitle
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm Dora!
        </WelcomeTitle>
        
        <WelcomeSubtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Welcome to my playground.
        </WelcomeSubtitle>
      </WelcomeContainer>
    );
  }

  return (
    <>
      <NavigationWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <AnimatePresence mode="wait">
          <AppContent />
        </AnimatePresence>
      </AppContainer>
    </Router>
  );
}

export default App;
