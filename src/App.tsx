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

const SolarSystemContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;

const Sun = styled(motion.button)<{ isInteractive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #ffd700, #ff8c00);
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 20px #ffd700;
  z-index: 10;
  cursor: ${props => props.isInteractive ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  
  &:hover {
    ${props => props.isInteractive && `
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: 0 0 30px #ffd700;
    `}
  }
`;


const Orbit = styled.div<{ radius: number; duration: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: rotate ${props => props.duration}s linear infinite;
  
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

const Planet = styled.div<{ color: string; size: number; angle: number; radius: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg) translateY(-${props => props.radius}px);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const ClockHand = styled(motion.div)<{ progress: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 150px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(${props => props.progress * 360}deg);
  border-radius: 2px;
  z-index: 5;
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
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const Navigation = styled.nav`
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 24px;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    border-radius: 15px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 8px;
    letter-spacing: 0.3px;
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
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [showEnterText, setShowEnterText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowEnterButton(true);
          // Add text after sun scaling animation completes
          setTimeout(() => setShowEnterText(true), 500);
          return 100;
        }
        return prev + 3.33;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleEnterClick = () => {
    setCurrentPage('welcome');
  };

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
        
        <SolarSystemContainer>
          <Sun 
            isInteractive={showEnterButton}
            onClick={showEnterButton ? handleEnterClick : undefined}
            animate={showEnterButton ? { 
              scale: 3,
              boxShadow: "0 0 40px #ffd700",
              x: "-50%",
              y: "-50%"
            } : {
              scale: 1,
              x: "-50%",
              y: "-50%"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {showEnterText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  color: 'white',
                  fontSize: '0.6rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  display: 'block',
                  lineHeight: '40px'
                }}
              >
                ENTER
              </motion.span>
            )}
          </Sun>
          
          {/* Mercury */}
          <Orbit radius={60} duration={3}>
            <Planet color="#8C7853" size={8} angle={23} radius={60} />
          </Orbit>
          
          {/* Venus */}
          <Orbit radius={80} duration={4}>
            <Planet color="#FFC649" size={10} angle={147} radius={80} />
          </Orbit>
          
          {/* Earth */}
          <Orbit radius={100} duration={5}>
            <Planet color="#6B93D6" size={12} angle={289} radius={100} />
          </Orbit>
          
          {/* Mars */}
          <Orbit radius={120} duration={6}>
            <Planet color="#C1440E" size={10} angle={67} radius={120} />
          </Orbit>
          
          {/* Jupiter */}
          <Orbit radius={140} duration={8}>
            <Planet color="#D8CA9D" size={18} angle={234} radius={140} />
          </Orbit>
          
          {/* Saturn */}
          <Orbit radius={160} duration={10}>
            <Planet color="#FAD5A5" size={15} angle={156} radius={160} />
          </Orbit>
          
          {/* Uranus */}
          <Orbit radius={180} duration={12}>
            <Planet color="#4FD0E3" size={12} angle={312} radius={180} />
          </Orbit>
          
          {/* Neptune */}
          <Orbit radius={200} duration={15}>
            <Planet color="#4B70DD" size={12} angle={89} radius={200} />
          </Orbit>
          
          <ClockHand progress={progress / 100} />
        </SolarSystemContainer>
        
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
